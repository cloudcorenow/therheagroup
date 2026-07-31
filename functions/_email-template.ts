// Branded HTML email templates for The Rhea Group contact form.
// Table-based, email-client-safe (Gmail, Outlook, Apple Mail).

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

const BRAND = {
  name: "The Rhea Group",
  navy: "#0a1628",
  navyDark: "#06101d",
  gold: "#c8906a",
  goldLight: "#e0b894",
  cream: "#f7f3ec",
  creamDark: "#ece5d8",
  text: "#3d4a5c",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDateTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
  } catch {
    return iso;
  }
}

function shell(inner: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
</head>
<body style="margin:0;padding:0;background-color:${BRAND.creamDark};font-family:Georgia,'Times New Roman',serif;color:${BRAND.text};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.creamDark};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:${BRAND.cream};border:1px solid ${BRAND.creamDark};">
          ${inner}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function header(heading: string): string {
  return `<tr>
    <td style="background-color:${BRAND.navy};padding:40px 48px 36px;text-align:center;">
      <span style="font-family:Georgia,serif;font-size:13px;letter-spacing:0.35em;text-transform:uppercase;color:${BRAND.goldLight};">${escapeHtml(BRAND.name)}</span>
      <div style="width:48px;height:1px;background-color:${BRAND.gold};margin:18px auto 20px;"></div>
      <h1 style="margin:0;font-size:24px;font-weight:400;color:${BRAND.cream};letter-spacing:0.5px;">${escapeHtml(heading)}</h1>
    </td>
  </tr>`;
}

function footer(): string {
  return `<tr>
    <td style="padding:0 48px 40px;text-align:center;">
      <div style="height:1px;background-color:${BRAND.creamDark};margin-bottom:28px;"></div>
      <p style="margin:0 0 8px;font-size:13px;color:${BRAND.gold};letter-spacing:0.3em;text-transform:uppercase;">${escapeHtml(BRAND.name)}</p>
      <p style="margin:0;font-size:12px;color:#8a93a0;line-height:1.7;">
        Boutique real estate advisory for private families &amp; family offices<br>
        Greater Los Angeles / Orange County, CA
      </p>
    </td>
  </tr>`;
}

export function buildNotificationEmail(data: ContactPayload, submittedAt: string): string {
  const rows = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    ...(data.company ? [{ label: "Company", value: data.company }] : []),
    ...(data.phone ? [{ label: "Phone", value: data.phone, href: `tel:${data.phone}` }] : []),
    ...(data.service ? [{ label: "Area of Interest", value: data.service }] : []),
  ];

  const detailRows = rows
    .map(
      (r) => `<tr>
      <td style="padding:16px 24px;border-bottom:1px solid ${BRAND.creamDark};width:40%;vertical-align:top;">
        <span style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${BRAND.gold};">${escapeHtml(r.label)}</span>
      </td>
      <td style="padding:16px 24px;border-bottom:1px solid ${BRAND.creamDark};vertical-align:top;">
        ${
          r.href
            ? `<a href="${escapeHtml(r.href)}" style="font-size:15px;color:${BRAND.navy};text-decoration:none;">${escapeHtml(r.value)}</a>`
            : `<span style="font-size:15px;color:${BRAND.navy};">${escapeHtml(r.value)}</span>`
        }
      </td>
    </tr>`,
    )
    .join("");

  return shell(`
    ${header("New Inquiry Received")}
    <tr><td style="padding:36px 48px 8px;">
      <p style="margin:0;font-size:15px;line-height:1.8;color:${BRAND.text};">
        A new inquiry was submitted through the website contact form. The details are below — respond directly to the sender to continue the conversation.
      </p>
    </td></tr>
    <tr><td style="padding:8px 48px 28px;">
      <p style="margin:0;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:${BRAND.gold};">
        Submitted ${escapeHtml(formatDateTime(submittedAt))}
      </p>
    </td></tr>
    <tr><td style="padding:0 48px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.creamDark};background-color:#fff;">
        ${detailRows}
        <tr>
          <td style="padding:16px 24px;vertical-align:top;">
            <span style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${BRAND.gold};">Message</span>
          </td>
          <td style="padding:16px 24px;vertical-align:top;">
            <span style="font-size:15px;line-height:1.7;color:${BRAND.navy};white-space:pre-wrap;">${escapeHtml(data.message)}</span>
          </td>
        </tr>
      </table>
    </td></tr>
    <tr><td style="padding:0 48px 40px;" align="center">
      <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Your%20Inquiry%20to%20The%20Rhea%20Group" style="display:inline-block;padding:16px 44px;background-color:${BRAND.gold};color:${BRAND.navyDark};font-size:12px;letter-spacing:0.25em;text-transform:uppercase;text-decoration:none;font-family:Georgia,serif;">Reply to ${escapeHtml(data.name.split(" ")[0])}</a>
    </td></tr>
    ${footer()}
  `);
}

export function buildAutoReplyEmail(data: ContactPayload): string {
  const preview = data.message.slice(0, 280);
  return shell(`
    ${header(`Thank You, ${escapeHtml(data.name.split(" ")[0])}`)}
    <tr><td style="padding:36px 48px 12px;">
      <p style="margin:0 0 18px;font-size:15px;line-height:1.8;color:${BRAND.text};">
        Your message has been received, and Joanne will respond personally within one business day. We appreciate the opportunity to learn about your situation and look forward to speaking with you.
      </p>
      <p style="margin:0;font-size:15px;line-height:1.8;color:${BRAND.text};">
        For anything urgent, you are welcome to reach out directly:
      </p>
    </td></tr>
    <tr><td style="padding:8px 48px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.creamDark};background-color:#fff;">
        <tr><td style="padding:16px 24px;border-bottom:1px solid ${BRAND.creamDark};">
          <span style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${BRAND.gold};">Email</span><br>
          <a href="mailto:joanne@therheagroup.com" style="font-size:15px;color:${BRAND.navy};text-decoration:none;">joanne@therheagroup.com</a>
        </td></tr>
        <tr><td style="padding:16px 24px;">
          <span style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${BRAND.gold};">Location</span><br>
          <span style="font-size:15px;color:${BRAND.navy};">Greater Los Angeles / Orange County, CA</span>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:0 48px 40px;">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${BRAND.gold};">Your Message</p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:#8a93a0;font-style:italic;border-left:2px solid ${BRAND.creamDark};padding-left:16px;">
        ${escapeHtml(preview)}${data.message.length > 280 ? "&hellip;" : ""}
      </p>
    </td></tr>
    ${footer()}
  `);
}
