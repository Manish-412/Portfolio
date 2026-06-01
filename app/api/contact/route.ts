import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { buildContactEmail } from "@/lib/email-template";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    const limiter = rateLimit(ip);

    if (!limiter.allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    let payload: unknown;

    try {
      payload = await request.json();
    } catch (err) {
      console.error("JSON Parse Error:", err);

      return NextResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      console.error("Validation Error:", parsed.error);

      return NextResponse.json(
        {
          error: "Invalid form data.",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    if (parsed.data.honey && parsed.data.honey.length > 0) {
      return NextResponse.json({ ok: true });
    }

    // DEBUG ENV VARIABLES
    console.log("=== ENV DEBUG ===");
    console.log(
      "RESEND_API_KEY exists:",
      !!process.env.RESEND_API_KEY
    );
    console.log(
      "CONTACT_EMAIL exists:",
      !!process.env.CONTACT_EMAIL
    );
    console.log(
      "RESEND_FROM_EMAIL:",
      process.env.RESEND_FROM_EMAIL
    );

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const contactEmail = process.env.CONTACT_EMAIL?.trim();

    const fromEmail =
      process.env.RESEND_FROM_EMAIL?.trim() ??
      "Portfolio <onboarding@resend.dev>";

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");

      return NextResponse.json(
        { error: "RESEND_API_KEY missing" },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      console.error("Missing CONTACT_EMAIL");

      return NextResponse.json(
        { error: "CONTACT_EMAIL missing" },
        { status: 500 }
      );
    }

    const email = buildContactEmail(parsed.data);

    const resend = new Resend(resendApiKey);

    console.log("Sending email via Resend...");

    const result = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: email.subject,
      html: email.html,
      replyTo: parsed.data.email,
    });

    console.log("Resend Success:", result);

    return NextResponse.json({
      ok: true,
      result,
    });
  } catch (error) {
    console.error("FULL CONTACT API ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : JSON.stringify(error),
      },
      { status: 500 }
    );
  }
}