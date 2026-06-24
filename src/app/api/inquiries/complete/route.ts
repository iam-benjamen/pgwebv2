import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const studioEmail = process.env.STUDIO_EMAIL!;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    fullName,
    email,
    phone,
    company,
    projectType,
    projectStage,
    budget,
    timeline,
    description,
  } = body;

  const [studioResult, userResult] = await Promise.all([
    resend.emails.send({
      from: "PGStudio Inquiries <onboarding@resend.dev>",
      to: studioEmail,
      subject: `Strategy Call Request (Complete) — ${fullName}`,
      html: `
        <h2>Complete Strategy Call Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Project Stage:</strong> ${projectStage}</p>
        <hr />
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Description:</strong><br />${description.replace(/\n/g, "<br />")}</p>
      `,
    }),
    resend.emails.send({
      from: "PGStudio <onboarding@resend.dev>",
      to: email,
      subject: "We received your strategy call request",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for reaching out to PGStudio. We've received your strategy call request and will review the details of your project shortly.</p>
        <p>A member of our team will be in touch within <strong>24 hours</strong> to schedule your call.</p>
        <br />
        <p>In the meantime, feel free to explore our work at <a href="https://thepgstudio.com">thepgstudio.com</a>.</p>
        <br />
        <p>— The PGStudio Team</p>
      `,
    }),
  ]);

  if (studioResult.error) {
    console.error("Studio email error:", studioResult.error);
  } else {
    console.log("Studio email sent:", studioResult.data?.id);
  }

  if (userResult.error) {
    console.error("User confirmation email error:", userResult.error);
  } else {
    console.log("User confirmation email sent:", userResult.data?.id);
  }

  if (studioResult.error && userResult.error) {
    return NextResponse.json({ ok: false, error: studioResult.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
