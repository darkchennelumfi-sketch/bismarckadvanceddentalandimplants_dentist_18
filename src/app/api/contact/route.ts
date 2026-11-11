import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot: pretend success so bots do not learn anything.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  // Delivery integration belongs here (email, CRM, or scheduling service).
  // The form is validated server-side; no personal data is persisted by this route.
  return NextResponse.json({ ok: true });
}
