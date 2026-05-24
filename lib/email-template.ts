import type { ContactValues } from "@/lib/validations";

export function buildContactEmail(payload: ContactValues) {
  const { name, email, subject, message, company } = payload;
  return {
    subject: `Portfolio inquiry: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; background:#0f172a; color:#e2e8f0; padding:32px;">
        <h2 style="margin:0 0 12px;">New portfolio inquiry</h2>
        <p style="margin:0 0 16px; color:#94a3b8;">You have a new message from your portfolio site.</p>
        <div style="background:#111827; padding:20px; border-radius:12px; border:1px solid rgba(148,163,184,0.2);">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p style="white-space:pre-line; margin-top:16px;">${message}</p>
        </div>
      </div>
    `,
  };
}
