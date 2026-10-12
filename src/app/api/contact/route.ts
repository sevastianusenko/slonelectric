import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Серверный приём формы с /contact. Раньше форма уходила напрямую на
 * Web3Forms, но клиент перешёл на Resend со своим подтверждённым доменом.
 * У Resend ключ серверный (секретный), в отличие от access_key у
 * Web3Forms — его нельзя класть в клиентский код, поэтому между формой
 * и Resend встал этот route handler.
 */

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Slon Electric Website <forms@slonelectric.com>";
const TO = "Anatoly@slonelectric.com";

export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot: то же поле и то же имя, что раньше проверял Web3Forms на своей стороне.
  if (data.get("botcheck")) {
    return NextResponse.json({ success: true });
  }

  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name || !phone || !message) {
    return NextResponse.json({ success: false, error: "Missing required field" }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email || undefined,
      subject: `New job inquiry from ${name} — slonelectric.com`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "(not given)"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Send failed" }, { status: 502 });
  }
}
