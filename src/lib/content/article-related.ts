import type { Post } from "@/interfaces/post";

export type ArticleHubRef = {
  href: string;
  /** Short label for the hub topic, e.g. "Transport in China" */
  label: string;
};

/** Frontmatter `section` → topic hub path + display label. */
const SECTION_HUB_MAP: Record<string, ArticleHubRef> = {
  "Transport in China": {
    href: "/transport-in-china",
    label: "Transport in China",
  },
  "Payments in China for Foreigners": {
    href: "/payments-in-china",
    label: "Payments in China",
  },
  "Internet & VPN & SIM in China": {
    href: "/internet-in-china",
    label: "Internet in China",
  },
  "Maps & Navigation in China": {
    href: "/maps-navigation-in-china",
    label: "Maps & Navigation",
  },
  "Food & Delivery in China": {
    href: "/food-delivery-in-china",
    label: "Food & Delivery",
  },
  "Hotels in China for Foreigners": {
    href: "/hotels-in-china",
    label: "Hotels in China",
  },
  "Attraction Tickets in China": {
    href: "/attraction-tickets-in-china",
    label: "Attraction Tickets",
  },
  "Travel China Essentials": {
    href: "/china-travel-essentials",
    label: "Travel Essentials",
  },
  "Visa & Entry": {
    href: "/china-visa-checker",
    label: "Visa & Entry",
  },
};

export function resolveArticleHub(section?: string): ArticleHubRef | null {
  if (!section) return null;
  return SECTION_HUB_MAP[section] ?? null;
}

/**
 * Same-section posts only, newest first, exclude current.
 * No cross-topic filler when the section has fewer than `limit` posts.
 */
export function getRelatedPosts(
  current: Pick<Post, "slug" | "section">,
  allPosts: Post[],
  limit = 3,
): Post[] {
  if (!current.section || limit <= 0) return [];
  return allPosts
    .filter(
      (p) =>
        p.slug !== current.slug &&
        Boolean(p.section) &&
        p.section === current.section,
    )
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, limit);
}
