/**
 * Central article CTA config — edit here to change copy/links sitewide.
 * Variants keyed by post `section` (frontmatter) with fuzzy matching.
 */

export type InlineCtaCopy = {
  lead: string;
  linkLabel: string;
  href: string;
  trackingEvent: string;
};

export type EndCtaCopy = {
  bridge: string;
  valueProp: string;
  buttonLabel: string;
  href: string;
  trust?: string;
  trackingEvent: string;
};

export type ArticleCtaVariantId =
  | "default"
  | "visa"
  | "payments"
  | "internet"
  | "maps"
  | "transport"
  | "food"
  | "hotels"
  | "tickets"
  | "essentials";

const PLANNER_HREF = "/china-itinerary-planner";

export const inlineCtaDefault: InlineCtaCopy = {
  lead: "Want a local to sequence this?",
  linkLabel: "Request a custom itinerary",
  href: PLANNER_HREF,
  trackingEvent: "article_inline_cta_click",
};

/** Troubleshooting pages where a mid-article itinerary ask interrupts the form. */
export const SKIP_INLINE_CTA_SLUGS = new Set(["chinese-id-number-foreigners"]);

export const endCtaByVariant: Record<ArticleCtaVariantId, EndCtaCopy> = {
  default: {
    bridge:
      "Guides cover the systems. A custom PDF covers city order, pace, and what to skip.",
    valueProp:
      "One-to-one planning with local, independent-travel clarity — not a tour template.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trust: "Your local partner for independent China travel.",
    trackingEvent: "article_end_cta_click",
  },
  visa: {
    bridge: "Visa path checked? Turn it into a simple day-by-day plan.",
    valueProp:
      "Map cities and days around your entry rules — before you book the hard-to-change pieces.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trust: "Practical entry guidance paired with a calm itinerary start.",
    trackingEvent: "article_end_cta_click",
  },
  payments: {
    bridge: "Payments sorted? Next is a route that won’t leave you guessing on day one.",
    valueProp:
      "Build a simple China itinerary once Alipay, cards, and backups are under control.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trackingEvent: "article_end_cta_click",
  },
  internet: {
    bridge: "Data and VPN ready? Sketch the cities you’ll actually visit.",
    valueProp:
      "Stay connected for maps and bookings — then lock in a clear route.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trackingEvent: "article_end_cta_click",
  },
  maps: {
    bridge: "Navigation figured out? Put the places on a day-by-day path.",
    valueProp:
      "Turn map apps into a practical China route — without overplanning.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trackingEvent: "article_end_cta_click",
  },
  transport: {
    bridge: "Got rides and trains sorted? Next is lining up the cities so day one connects.",
    valueProp:
      "Sketch a simple China route — then DiDi, metro, and high-speed rail actually fit together.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trackingEvent: "article_end_cta_click",
  },
  food: {
    bridge: "Eating well on the ground starts with knowing where you’ll be.",
    valueProp:
      "Build a simple city flow — then enjoy food apps without the scramble.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trackingEvent: "article_end_cta_click",
  },
  hotels: {
    bridge: "Hotels work best when the nights match the route.",
    valueProp:
      "Sketch cities and days first — then book foreigner-friendly stays with confidence.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trackingEvent: "article_end_cta_click",
  },
  tickets: {
    bridge: "Popular sights sell out — a clear route tells you what to book early.",
    valueProp:
      "Plan the days, then reserve tickets for the stops that need them.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trackingEvent: "article_end_cta_click",
  },
  essentials: {
    bridge: "Essentials covered? Turn prep into a calm first itinerary.",
    valueProp:
      "Practical China travel planning for foreigners — one clear next step.",
    buttonLabel: "Plan my China trip",
    href: PLANNER_HREF,
    trust: "Written for first-time visitors, not tour-board marketing.",
    trackingEvent: "article_end_cta_click",
  },
};

/** Map WordPress/frontmatter section strings → variant id */
const SECTION_VARIANT_RULES: { match: RegExp; variant: ArticleCtaVariantId }[] =
  [
    { match: /visa|entry/i, variant: "visa" },
    { match: /payment|alipay|wechat pay/i, variant: "payments" },
    { match: /internet|vpn|sim|esim/i, variant: "internet" },
    { match: /map|navigation/i, variant: "maps" },
    { match: /transport|train|metro|didi|ride[- ]?hail/i, variant: "transport" },
    { match: /food|delivery|meituan/i, variant: "food" },
    { match: /hotel/i, variant: "hotels" },
    { match: /ticket|attraction/i, variant: "tickets" },
    { match: /essential|travel china/i, variant: "essentials" },
  ];

function matchVariant(haystack: string): ArticleCtaVariantId | null {
  if (!haystack.trim()) return null;
  for (const rule of SECTION_VARIANT_RULES) {
    if (rule.match.test(haystack)) return rule.variant;
  }
  return null;
}

/**
 * Prefer frontmatter `section` over keywords.
 * Keywords often mention Alipay/Amap/etc. and used to steal the wrong end CTA
 * (e.g. DiDi transport posts showing “Payments sorted?”).
 */
export function resolveArticleCtaVariant(
  section?: string,
  keywords?: string[],
): ArticleCtaVariantId {
  const fromSection = matchVariant(section ?? "");
  if (fromSection) return fromSection;
  const fromKeywords = matchVariant((keywords ?? []).join(" "));
  if (fromKeywords) return fromKeywords;
  return "default";
}

export function getInlineCtaCopy(): InlineCtaCopy {
  return inlineCtaDefault;
}

export function getEndCtaCopy(variant: ArticleCtaVariantId): EndCtaCopy {
  return endCtaByVariant[variant] ?? endCtaByVariant.default;
}

/** Minimum eligible paragraphs before showing mid-article CTA */
export const INLINE_CTA_MIN_PARAGRAPHS = 3;
