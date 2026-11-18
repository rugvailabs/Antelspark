import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { z } from "zod";

import { siteConfig } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(120),
  email: z.string().trim().email("Please use a valid email address.").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "A sentence or two helps us help you.")
    .max(5000),
});

export async function POST(request: Request) {
  let data: z.infer<typeof contactSchema>;
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." },
        { status: 400 },
      );
    }
    data = parsed.data;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          `Antelspark Website <onboarding@resend.dev>`,
        to: [to],
        replyTo: data.email,
        subject: `New enquiry from ${data.name}${data.service ? ` — ${data.service}` : ""}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.phone ? `Phone: ${data.phone}` : null,
          data.service ? `Service: ${data.service}` : null,
          "",
          data.message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
      if (error) throw new Error(error.message);
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("[contact] send failed:", err);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message just now. Please email us directly." },
        { status: 502 },
      );
    }
  }

  // Development fallback: no RESEND_API_KEY configured — record the enquiry
  // locally so nothing is lost, and say so in the server log.
  try {
    const dir = path.join(process.cwd(), ".contact-submissions");
    await mkdir(dir, { recursive: true });
    const line = `${new Date().toISOString()} | ${data.name} <${data.email}>${data.phone ? ` | ${data.phone}` : ""}${data.service ? ` | ${data.service}` : ""}\n${data.message}\n---\n`;
    await appendFile(path.join(dir, "submissions.log"), line, "utf8");
    console.warn(
      "[contact] RESEND_API_KEY not set — enquiry logged to .contact-submissions/submissions.log",
    );
    return NextResponse.json({ ok: true, dev: true });
  } catch (err) {
    console.error("[contact] fallback logging failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't record your message. Please email us directly." },
      { status: 500 },
    );
  }
}
