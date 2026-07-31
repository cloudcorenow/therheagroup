import {
  buildAutoReplyEmail,
  buildNotificationEmail,
  type ContactPayload,
} from "../_email-template";

interface Env {
  RESEND_API_KEY: string;
}

const CONTACT_TO_EMAIL = "joanne@therheagroup.com";
const CONTACT_FROM_EMAIL = "Rhea Group <noreply@notifications.therheagroup.com>";
const RESEND_API_URL = "https://api.resend.com/emails";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function sendEmail(
  apiKey: string,
  from: string,
  to: string,
  subject: string,
  html: string,
): Promise<void> {
  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, html }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend API error (${res.status}): ${detail}`);
  }
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return json(500, { error: "Email service is not configured" });
  }

  // Geo-block: only allow requests originating from the United States.
  if ((request as Request & { cf?: { country?: string } }).cf?.country !== "US") {
    return json(451, {
      error:
        "We're unable to accept inquiries from outside the United States at this time. Please email us directly at joanne@therheagroup.com.",
    });
  }

  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return json(422, { error: "Missing required fields: name, email, message" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return json(422, { error: "Invalid email address" });
  }

  if (data.message.length > 5000) {
    return json(422, { error: "Message too long (max 5000 characters)" });
  }

  const submittedAt = new Date().toISOString();

  try {
    // 1. Branded notification to the team
    await sendEmail(
      env.RESEND_API_KEY,
      CONTACT_FROM_EMAIL,
      CONTACT_TO_EMAIL,
      `New Inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      buildNotificationEmail(data, submittedAt),
    );

    // 2. Auto-reply to the submitter
    await sendEmail(
      env.RESEND_API_KEY,
      CONTACT_FROM_EMAIL,
      data.email,
      "Thank you for contacting The Rhea Group",
      buildAutoReplyEmail(data),
    );

    return json(200, { ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return json(502, { error: "Failed to send email" });
  }
};
