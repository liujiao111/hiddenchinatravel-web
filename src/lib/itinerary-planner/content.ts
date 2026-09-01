import { plannerTrustLine } from "@/lib/about/founder-content";
import { destinationCities } from "@/lib/home/content";

/** Shared copy + options for the reusable itinerary planner form. */

export const plannerSectionCopy = {
  eyebrow: "Itinerary planning",
  title: "Request a custom independent itinerary",
  subtitle:
    "Share cities, days, and pace. After we confirm scope, you get a ready-to-follow PDF in 48–72 hours. The request is free, and this is not a tour.",
  pricingHint:
    "5 days $99 · 6–10 $129 · 10+ $199. We confirm the fee before you pay.",
  priceLine: "5 days $99 · 6–10 $129 · 10+ $199 · confirm before you pay",
  whatsappCta: "Prefer chat? WhatsApp first",
  whatsappPrefill:
    "Hi! I'd like a custom China itinerary PDF (from $99). Cities and days:",
  trustLine: plannerTrustLine,
} as const;

export const plannerStepMeta = [
  { id: "where", label: "Where to?" },
  { id: "style", label: "Your style" },
  { id: "contact", label: "Almost done!" },
] as const;

export const plannerCtaCopy = {
  nextStyle: "Next: Tell us your style",
  almostThere: "Almost there →",
  submit: "Request My Custom Itinerary",
  back: "Back",
} as const;

export type PlannerDestinationOption = {
  id: string;
  label: string;
};

export const plannerDestinations: PlannerDestinationOption[] = [
  ...destinationCities.map((c) => ({
    id: c.id,
    label: c.id === "guilin" ? "Guilin" : c.name,
  })),
  { id: "other", label: "Other / not sure" },
];

const plannerDestinationIds = new Set(plannerDestinations.map((d) => d.id));

const plannerDestAliases: Record<string, string> = {
  kunming: "yunnan",
};

/** `?dest=yunnan` or `?dest=yunnan,chengdu` — unknown ids are dropped. */
export function parsePlannerDestQuery(
  raw?: string | string[],
): string[] {
  const value = Array.isArray(raw) ? raw.join(",") : (raw ?? "");
  const seen = new Set<string>();
  for (const part of value.split(",")) {
    const id =
      plannerDestAliases[part.trim().toLowerCase()] ??
      part.trim().toLowerCase();
    if (plannerDestinationIds.has(id) && !seen.has(id)) {
      seen.add(id);
    }
  }
  return [...seen];
}

export const yunnanShapes = [
  {
    id: "loop-7",
    label: "7-day Kunming–Dali–Lijiang loop",
    hint: "The rail spine · $129 early bird",
    days: 7,
  },
  {
    id: "shangrila-10",
    label: "10 days + Shangri-La",
    hint: "On the line from Lijiang",
    days: 10,
  },
  {
    id: "banna-10",
    label: "10 days + Xishuangbanna",
    hint: "Off-line · 3–4 days + backtrack",
    days: 10,
  },
  {
    id: "custom",
    label: "Not sure / custom shape",
    hint: "We’ll confirm in the reply",
    days: 7,
  },
] as const;

export type YunnanShapeId = (typeof yunnanShapes)[number]["id"];

const yunnanShapeIds = new Set<string>(yunnanShapes.map((s) => s.id));

/** `?shape=loop-7` from the Yunnan hub. */
export function parsePlannerShapeQuery(
  raw?: string | string[],
): YunnanShapeId | "" {
  const value = Array.isArray(raw) ? raw[0] : raw;
  const id = (value ?? "").trim().toLowerCase();
  return yunnanShapeIds.has(id) ? (id as YunnanShapeId) : "";
}

export const plannerDayBounds = { min: 3, max: 21, default: 7 } as const;

export const plannerTravelerBounds = { min: 1, max: 8, default: 2 } as const;

export type PlannerStyleOption = {
  id: string;
  label: string;
  icon: "food" | "history" | "nature" | "offbeat" | "family";
};

export const plannerStyles: PlannerStyleOption[] = [
  { id: "food", label: "Food", icon: "food" },
  { id: "history", label: "History", icon: "history" },
  { id: "nature", label: "Nature", icon: "nature" },
  { id: "offbeat", label: "Offbeat", icon: "offbeat" },
  { id: "family", label: "Family", icon: "family" },
];

export type PlannerBudgetOption = {
  id: string;
  label: string;
  hint: string;
};

export const plannerBudgets: PlannerBudgetOption[] = [
  { id: "modest", label: "Modest", hint: "Hostels & local eats" },
  { id: "comfortable", label: "Comfortable", hint: "Mid-range hotels" },
  { id: "flexible", label: "Flexible", hint: "Upscale when it counts" },
  { id: "unsure", label: "Not sure yet", hint: "We'll suggest ranges" },
];

/** Tone keys drive icon/background color in the service panel. */
export type PlannerInfoTone = "include" | "exclude" | "pricing" | "response";

export type PlannerInfoCard = {
  id: string;
  tone: PlannerInfoTone;
  title: string;
  /** Short scan line under the title */
  summary: string;
  items?: string[];
};

/**
 * Service boundary + pricing — keep in sync with /services.
 * This form starts a paid custom itinerary request (tiered by trip length).
 */
export const plannerInfoCards: PlannerInfoCard[] = [
  {
    id: "include",
    tone: "include",
    title: "What's included",
    summary: "What you get when we plan together.",
    items: [
      "Custom itinerary planning (PDF route)",
      "Pre-trip prep + Survival Kit bonus",
      "On-trip quick-help available as add-on",
    ],
  },
  {
    id: "exclude",
    tone: "exclude",
    title: "Not included by default",
    summary: "Keeps expectations clear up front.",
    items: [
      "Flight / hotel booking (optional add-on)",
      "Visa applications or embassy runs",
    ],
  },
  {
    id: "pricing",
    tone: "pricing",
    title: "Custom planning price",
    summary: "Early-bird founding rates · regular after 2027-01-01.",
    items: [
      "Up to 5 days: $99 early bird · from $129 regular",
      "6–10 days: $129 early bird · from $169 regular",
      "10+ days: $199 early bird · from $219 regular",
      "Paid PDF in 48–72 hours after confirm — this request is free",
    ],
  },
  {
    id: "response",
    tone: "response",
    title: "Response time",
    summary: "We reply within 24–48 hours.",
    items: ["One-to-one — not an auto template"],
  },
];

/** Compact add-on links under the planner sidebar. */
export const plannerAddonLinks = [
  {
    id: "on-trip",
    label: "On-trip quick help",
    price: "from $29.90",
    href: "/services#differentiator",
  },
  {
    id: "review",
    label: "Itinerary review",
    price: "$50/hr",
    href: "/services#itinerary-review",
  },
  {
    id: "booking",
    label: "Booking assistance",
    price: "from $5",
    href: "/services#booking-assistance",
  },
] as const;

export const plannerAddonLinksFooter = {
  label: "Full services & pricing",
  href: "/services",
} as const;

export const plannerSuccessCopy = {
  title: "We've got your request.",
  body: "Thanks — your custom itinerary request is in. We'll reply within 24–48 hours with next steps and pricing for your dates. Nothing is charged until you confirm scope with us. WhatsApp during business hours is usually faster.",
  whatsappHint:
    "Want a faster reply? Continue on WhatsApp — we’ll match your request to this chat.",
} as const;
