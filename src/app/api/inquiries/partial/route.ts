import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const studioEmail = process.env.STUDIO_EMAIL!;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullName, email, phone, company, projectType, projectStage } = body;

  const { data, error } = await resend.emails.send({
    from: "PGStudio Inquiries <onboarding@resend.dev>",
    to: studioEmail,
    subject: `New Strategy Call Request — ${fullName}`,
    html: `
      <h2>New Strategy Call Inquiry (Step 1)</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Project Stage:</strong> ${projectStage}</p>
      <hr />
      <p style="color:#888;">This inquiry was submitted via the Book a Call form. The client may not have completed step 2.</p>
    `,
  });

  if (error) {
    console.error("Partial inquiry email error:", error);
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }

  console.log("Partial inquiry email sent:", data?.id);
  return NextResponse.json({ ok: true });
}
