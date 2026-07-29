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
