import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { buildContactEmail } from "@/lib/email-template";
import { rateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/data";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Unknown email delivery error";
}

function buildMailtoUrl(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
}) {
  const recipient = process.env.CONTACT_EMAIL?.trim() || siteConfig.email;
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company?.trim() || "Not provided"}`,
    "",
    payload.message,
  ];

  const mailSubject = encodeURIComponent(`Portfolio inquiry: ${payload.subject}`);
  const mailBody = encodeURIComponent(lines.join("\n"));

  return `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
}

export async function POST(request: Request) {
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
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  if (parsed.data.honey && parsed.data.honey.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const contactEmail = process.env.CONTACT_EMAIL?.trim();
  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() ?? "Portfolio <onboarding@resend.dev>";

  const fallbackUrl = buildMailtoUrl(parsed.data);

  if (!resendApiKey || !contactEmail) {
    return NextResponse.json({ ok: true, fallbackUrl });
  }

  const email = buildContactEmail(parsed.data);
  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: email.subject,
      html: email.html,
      replyTo: parsed.data.email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = getErrorMessage(error);
    console.error("Contact form email delivery failed:", message);

    return NextResponse.json({
      ok: true,
      fallbackUrl,
      warning:
        process.env.NODE_ENV === "development"
          ? message
          : "Failed to send email directly, so the form is opening your email app instead.",
    });
  }
}
