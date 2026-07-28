/** Lightweight analytics hook — swap body for GA4 / Plausible later. */
export function trackEvent(
  name: string,
  payload?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return;
  try {
    // eslint-disable-next-line no-console
    console.debug("[track]", name, payload ?? {});
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
