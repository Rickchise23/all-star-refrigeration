/**
 * Vercel serverless — POST JSON body, optionally sends email via Resend.
 *
 * Env:
 *   CONTACT_EMAIL_ENABLED — set to "true" to actually send mail; otherwise the
 *     form still succeeds but nothing is sent (no Resend call, no key needed).
 *   RESEND_API_KEY — required only when CONTACT_EMAIL_ENABLED=true
 *   CONTACT_TO_EMAIL, CONTACT_FROM — when sending is enabled
 *
 * We never send email *to* the person who filled out the form — only one message
 * to your business inbox when sending is enabled.
 */

export const config = { runtime: "edge" };

const MAX = { name: 120, phone: 40, email: 120, service: 80, urgency: 120, message: 4000 };

function clip(s, max) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Honeypot — if filled, pretend success (bots)
  if (body.company && String(body.company).trim() !== "") {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = clip(body.name, MAX.name);
  const phone = clip(body.phone, MAX.phone);
  const email = clip(body.email, MAX.email);
  const service = clip(body.service, MAX.service);
  const urgency = clip(body.urgency, MAX.urgency);
  const message = clip(body.message, MAX.message);

  if (!name || !phone || !service || !urgency) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const sendEnabled = process.env.CONTACT_EMAIL_ENABLED === "true";
  if (!sendEnabled) {
    return new Response(JSON.stringify({ ok: true, sent: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server not configured (missing RESEND_API_KEY)" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  const to = process.env.CONTACT_TO_EMAIL || "allstarrefrigeration@gmail.com";
  const from =
    process.env.CONTACT_FROM || "All Star Website <onboarding@resend.dev>";

  const subject = `Lead: ${name} — ${service}`;
  const html = `
    <h2>New request from allstarrefrigeration.com</h2>
    <table style="font-family:sans-serif;font-size:14px;line-height:1.5;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email ? escapeHtml(email) : "—"}</td></tr>
      <tr><td><strong>Service</strong></td><td>${escapeHtml(service)}</td></tr>
      <tr><td><strong>Urgency</strong></td><td>${escapeHtml(urgency)}</td></tr>
    </table>
    <p><strong>Message</strong></p>
    <p style="white-space:pre-wrap;">${escapeHtml(message) || "—"}</p>
  `;

  const emailPayload = {
    from,
    to: [to],
    subject,
    html,
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("Resend error", res.status, data);
    return new Response(
      JSON.stringify({ error: "Could not send message. Please call or email us directly." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ ok: true, sent: true, id: data.id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
