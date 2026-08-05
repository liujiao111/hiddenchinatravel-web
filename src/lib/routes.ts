import { guidesNav } from "@/lib/navigation";

/** Top-level app routes that are not markdown articles (`/[slug]`). */
export const RESERVED_TOP_SEGMENTS = new Set([
  "about",
  "contact",
  "search",
  "tools",
  "survival-guides",
  "survival-kit",
  "china-destinations",
  "privacy-policy",
  "terms-of-service",
  "services",
  "checkout",
  "china-itinerary-planner",
  "china-visa-checker",
  "china-currency-converter",
  "posts",
  "go",
  "api",
  ...guidesNav.map((item) => item.href.replace(/^\//, "")),
]);

export function normalizePathname(pathname: string): string {
  return pathname.endsWith("/") && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;
}

/** True for markdown post URLs like `/do-you-need-vpn-china`. */
export function isArticlePath(pathname: string): boolean {
  const parts = normalizePathname(pathname).split("/").filter(Boolean);
  return parts.length === 1 && !RESERVED_TOP_SEGMENTS.has(parts[0]);
}
