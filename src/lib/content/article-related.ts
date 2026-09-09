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
  "China Itinerary Planning": {
    href: "/china-itinerary-planning",
    label: "Itinerary Planning",
  },
};

/**
 * High-intent SEO clusters (food / payments / real-name / VPN / SIM).
 * Prefer these cross-links in Continue reading even across sections.
 */
const CLUSTER_RELATED_SLUGS: Record<string, readonly string[]> = {
  "order-food-china-without-chinese-number": [
    "how-to-use-meituan",
    "alipay-for-foreigners-china",
    "china-sim-card-for-foreigners",
    "alipay-wechat-pay-verification-failed",
  ],
  "how-to-use-meituan": [
    "order-food-china-without-chinese-number",
    "alipay-for-foreigners-china",
    "china-sim-card-for-foreigners",
  ],
  "alipay-wechat-pay-verification-failed": [
    "why-your-payment-fails-in-china",
    "alipay-for-foreigners-china",
    "chinese-id-number-foreigners",
    "china-real-name-system-foreigners",
  ],
  "why-your-payment-fails-in-china": [
    "alipay-wechat-pay-verification-failed",
    "alipay-for-foreigners-china",
    "wechat-pay-for-foreigners-china",
    "digital-survival-china-payment-guide",
  ],
  "alipay-for-foreigners-china": [
    "alipay-wechat-pay-verification-failed",
    "why-your-payment-fails-in-china",
    "wechat-pay-for-foreigners-china",
    "order-food-china-without-chinese-number",
  ],
  "wechat-pay-for-foreigners-china": [
    "alipay-wechat-pay-verification-failed",
    "alipay-for-foreigners-china",
    "why-your-payment-fails-in-china",
  ],
  "china-real-name-system-foreigners": [
    "chinese-id-number-foreigners",
    "china-sim-card-for-foreigners",
    "alipay-wechat-pay-verification-failed",
    "hotels-in-china-for-foreigners",
  ],
  "chinese-id-number-foreigners": [
    "china-real-name-system-foreigners",
    "alipay-wechat-pay-verification-failed",
    "hotels-in-china-for-foreigners",
    "china-attraction-ticket-booking-foreigners-2026",
  ],
  "best-vpn-for-china": [
    "do-you-need-vpn-china",
    "best-esim-for-china-travel",
    "china-sim-card-for-foreigners",
    "digital-survival-china-internet-guide",
  ],
  "do-you-need-vpn-china": [
    "best-vpn-for-china",
    "best-esim-for-china-travel",
    "china-sim-card-for-foreigners",
  ],
  "china-sim-card-for-foreigners": [
    "china-real-name-system-foreigners",
    "best-esim-for-china-travel",
    "best-vpn-for-china",
    "order-food-china-without-chinese-number",
  ],
  "best-esim-for-china-travel": [
    "trip-com-esim-china-review",
    "china-sim-card-for-foreigners",
    "do-you-need-vpn-china",
  ],
  "trip-com-esim-china-review": [
    "best-esim-for-china-travel",
    "china-sim-card-for-foreigners",
    "do-you-need-vpn-china",
  ],
  "digital-survival-china-payment-guide": [
    "alipay-wechat-pay-verification-failed",
    "alipay-for-foreigners-china",
    "why-your-payment-fails-in-china",
  ],
  "digital-survival-china-internet-guide": [
    "best-vpn-for-china",
    "china-sim-card-for-foreigners",
    "best-esim-for-china-travel",
  ],
  "how-to-plan-china-itinerary": [
    "independent-travel-china",
    "digital-survival-china-payment-guide",
    "digital-survival-china-internet-guide",
    "dali-hidden-gems-off-the-beaten-path",
  ],
  "independent-travel-china": [
    "how-to-plan-china-itinerary",
    "dali-hidden-gems-off-the-beaten-path",
  ],
  "dali-hidden-gems-off-the-beaten-path": [
    "how-to-plan-china-itinerary",
    "how-to-use-didi-china-foreigners",
    "best-esim-for-china-travel",
  ],
};

export function resolveArticleHub(section?: string): ArticleHubRef | null {
  if (!section) return null;
  return SECTION_HUB_MAP[section] ?? null;
}

/**
 * Prefer curated cluster links for proven SEO pages, then fill with
 * same-section posts (newest first). Never invent missing slugs.
 */
export function getRelatedPosts(
  current: Pick<Post, "slug" | "section">,
  allPosts: Post[],
  limit = 3,
): Post[] {
  if (limit <= 0) return [];

  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
  const picked: Post[] = [];
  const seen = new Set<string>([current.slug]);

  const pushSlug = (slug: string) => {
    if (picked.length >= limit || seen.has(slug)) return;
    const post = bySlug.get(slug);
    if (!post) return;
    seen.add(slug);
    picked.push(post);
  };

  for (const slug of CLUSTER_RELATED_SLUGS[current.slug] ?? []) {
    pushSlug(slug);
  }

  if (picked.length < limit && current.section) {
    const sameSection = allPosts
      .filter(
        (p) =>
          !seen.has(p.slug) &&
          Boolean(p.section) &&
          p.section === current.section,
      )
      .sort((a, b) => (a.date > b.date ? -1 : 1));
    for (const post of sameSection) {
      pushSlug(post.slug);
      if (picked.length >= limit) break;
    }
  }

  return picked;
}
