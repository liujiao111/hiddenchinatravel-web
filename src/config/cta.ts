/**
 * Central article CTA config — edit here to change copy/links sitewide.
 * Variants keyed by post `section` (frontmatter) with fuzzy matching.
 */

import {
  PLANNER_HREF,
  PRIMARY_CTA_LABEL,
  WHEN_TO_HIRE,
} from "@/lib/trust/copy";

export type InlineCtaCopy = {
  lead: string;
  linkLabel: string;
  href: string;
  trackingEvent: string;
};

export type EndCtaIntent = "planner" | "systems";

export type EndCtaCopy = {
  intent: EndCtaIntent;
  bridge: string;
  valueProp: string;
  buttonLabel: string;
  href: string;
  trust?: string;
  trackingEvent: string;
  /** DIY path — systems articles should not only sell the PDF */
  secondaryLabel?: string;
  secondaryHref?: string;
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

const SYSTEMS_VARIANTS: ReadonlySet<ArticleCtaVariantId> = new Set([
  "visa",
  "payments",
  "internet",
  "maps",
  "transport",
  "food",
  "hotels",
  "tickets",
  "essentials",
]);

export function isSystemsCtaVariant(variant: ArticleCtaVariantId): boolean {
  return SYSTEMS_VARIANTS.has(variant);
}

export const inlineCtaDefault: InlineCtaCopy = {
  lead: "Want a local to sequence this?",
  linkLabel: "Request a custom itinerary",
  href: PLANNER_HREF,
  trackingEvent: "article_inline_cta_click",
};

/** Route / independent-travel articles that should sell the PDF, not DIY systems. */
export const PLANNER_END_CTA_SLUGS = new Set([
  "independent-travel-china",
  "how-to-plan-china-itinerary",
]);

/** Troubleshooting pages where a mid-article itinerary ask interrupts the form. */
export const SKIP_INLINE_CTA_SLUGS = new Set([
  "chinese-id-number-foreigners",
  // The Dali pillar already has a route-decision CTA in context; do not stack
  // the generic prompt on top of it.
  "dali-travel-guide",
]);

const DALI_YUNNAN_END_CTA: EndCtaCopy = {
  intent: "planner",
  bridge:
    "Use the guides when the logistics are clear. Ask for help when the route itself is not.",
  valueProp:
    "For a Dali–Lijiang trip, we turn your dates, pace, and overnight bases into an independent Yunnan route—not a tour-bus schedule.",
  buttonLabel: "Plan this Yunnan route",
  href: "/china-itinerary-planner?dest=yunnan&shape=loop-7#plan-trip",
  trust:
    "6–10 day routes are $129 early bird. Nothing is charged until we confirm the scope.",
  trackingEvent: "article_end_cta_click",
};

function systemsEnd(bridge: string): EndCtaCopy {
  return {
    intent: "systems",
    bridge,
    valueProp: WHEN_TO_HIRE.systemsValue,
    buttonLabel: WHEN_TO_HIRE.hireLabel,
    href: WHEN_TO_HIRE.hireHref,
    secondaryLabel: WHEN_TO_HIRE.diyLabel,
    secondaryHref: WHEN_TO_HIRE.diyHref,
    trust: WHEN_TO_HIRE.systemsTrust,
    trackingEvent: "article_end_cta_click",
  };
}

export const endCtaByVariant: Record<ArticleCtaVariantId, EndCtaCopy> = {
  default: {
    intent: "planner",
    bridge:
      "Guides cover the systems. A custom PDF covers city order, pace, and what to skip.",
    valueProp:
      "One-to-one planning with local, independent-travel clarity — not a tour template.",
    buttonLabel: PRIMARY_CTA_LABEL,
    href: PLANNER_HREF,
    trust: "From $99 · Survival Kit included. Confirm the fee before you pay.",
    trackingEvent: "article_end_cta_click",
  },
  visa: systemsEnd("You don't need a custom itinerary to finish a visa check."),
  payments: systemsEnd(
    "You don't need a custom itinerary to get payments working.",
  ),
  internet: systemsEnd(
    "You don't need a custom itinerary to get data or a VPN working.",
  ),
  maps: systemsEnd(
    "You don't need a custom itinerary to get maps working on the ground.",
  ),
  transport: systemsEnd(
    "You don't need a custom itinerary to book a train or a DiDi.",
  ),
  food: systemsEnd(
    "You don't need a custom itinerary to order food on the ground.",
  ),
  hotels: systemsEnd(
    "You don't need a custom itinerary to check in as a foreign guest.",
  ),
  tickets: systemsEnd(
    "You don't need a custom itinerary to book an attraction ticket.",
  ),
  essentials: systemsEnd(
    "You don't need a custom itinerary to finish this prep step.",
  ),
};

/** Map WordPress/frontmatter section strings → variant id */
const SECTION_VARIANT_RULES: { match: RegExp; variant: ArticleCtaVariantId }[] =
  [
    { match: /itinerary|planning/i, variant: "default" },
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
  articleSlug?: string,
): ArticleCtaVariantId {
  if (articleSlug && PLANNER_END_CTA_SLUGS.has(articleSlug)) {
    return "default";
  }
  const fromSection = matchVariant(section ?? "");
  if (fromSection) return fromSection;
  const fromKeywords = matchVariant((keywords ?? []).join(" "));
  if (fromKeywords) return fromKeywords;
  return "default";
}

export function getInlineCtaCopy(): InlineCtaCopy {
  return inlineCtaDefault;
}

export function getEndCtaCopy(
  variant: ArticleCtaVariantId,
  options?: {
    diyHref?: string;
    diyLabel?: string;
    articleSlug?: string;
  },
): EndCtaCopy {
  if (options?.articleSlug === "dali-travel-guide") {
    return DALI_YUNNAN_END_CTA;
  }
  const copy = endCtaByVariant[variant] ?? endCtaByVariant.default;
  if (copy.intent !== "systems") return copy;
  return {
    ...copy,
    secondaryHref: options?.diyHref ?? copy.secondaryHref,
    secondaryLabel: options?.diyLabel ?? copy.secondaryLabel,
  };
}

export function shouldSkipInlineCta(
  variant: ArticleCtaVariantId,
  articleSlug?: string,
): boolean {
  if (articleSlug && SKIP_INLINE_CTA_SLUGS.has(articleSlug)) return true;
  return isSystemsCtaVariant(variant);
}

/** Minimum eligible paragraphs before showing mid-article CTA */
export const INLINE_CTA_MIN_PARAGRAPHS = 3;
