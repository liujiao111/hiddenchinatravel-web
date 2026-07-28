import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export type FormNotifyPayload = {
  subject: string;
  text: string;
  replyTo?: string;
};

/**
 * Send a form notification via Resend.
 * Requires RESEND_API_KEY. Optional: RESEND_FROM, FORM_NOTIFY_EMAIL.
 */
export async function sendFormNotify(
  payload: FormNotifyPayload,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const from =
    process.env.RESEND_FROM?.trim() ||
    `${SITE_NAME} <onboarding@resend.dev>`;
  const to = process.env.FORM_NOTIFY_EMAIL?.trim() || SITE_EMAIL;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: payload.subject,
        text: payload.text,
        ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
