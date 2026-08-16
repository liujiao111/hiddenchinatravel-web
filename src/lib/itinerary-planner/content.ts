import { destinationCities } from "@/lib/home/content";

/** Shared copy + options for the reusable itinerary planner form. */

export const plannerSectionCopy = {
  eyebrow: "Itinerary planning",
  title: "Ready to go? Let's plan your trip.",
  subtitle: "Tell us where you want to go — we'll handle the how.",
  pricingHint:
    "Early-bird planning from $99 by trip length — we confirm scope and fee before you pay. This request is free.",
  trustLine:
    "No spam, no pushy sales calls — just a real itinerary from someone who's been there.",
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
    price: "from $29.9",
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
  body: "Thanks — your custom itinerary request is in. We'll reply within 24–48 hours with next steps and pricing for your dates. Nothing is charged until you confirm scope with us.",
  whatsappHint:
    "Want a faster reply? Continue on WhatsApp — we’ll match your request to this chat.",
} as const;
