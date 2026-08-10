/** Shared affiliate click event name for GA4 / dataLayer. */
export const AFFILIATE_CLICK_EVENT = "affiliate_click";

export function affiliateSlugFromHref(href: string): string | undefined {
  try {
    const path = href.startsWith("http")
      ? new URL(href).pathname
      : href.split("?")[0] ?? href;
    const match = path.match(/\/go\/([^/?#]+)/i);
    return match?.[1]?.toLowerCase();
  } catch {
    return undefined;
  }
}
