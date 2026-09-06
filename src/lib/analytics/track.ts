/** Visa checker: form submit on /china-visa-checker, or country pick on the homepage mini. */
export const VISA_CHECKER_SUBMIT_EVENT = "visa_checker_submit";

/** Currency converter: first amount / pair / swap / refresh on the converter page. */
export const CURRENCY_CONVERTER_USE_EVENT = "currency_converter_use";

/** Client-side event helper — forwards to GA4 gtag when present. */
export function trackEvent(
  name: string,
  payload?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return;
  try {
    const w = window as Window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer?.push({ event: name, ...payload });
    w.gtag?.("event", name, payload);
  } catch {
    /* ignore */
  }
}
