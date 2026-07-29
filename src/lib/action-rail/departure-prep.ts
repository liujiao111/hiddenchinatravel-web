import type {
  ActionRailBehavior,
  ActionRailContent,
  ActionRailVisibility,
} from "@/components/action-rail/types";

/** Sitewide scroll rail — local partner positioning + core CTAs */
export const DEPARTURE_PREP_CONTENT: ActionRailContent = {
  eyebrow: "Hidden China Travel",
  title: "Your local partner for independent China travel",
  support:
    "Not a tour template — one-to-one planning and practical prep for foreigners who want to travel China on their own terms.",
  tabLabel: "Local partner",
  mobileBarLabel: "Your local China partner",
  primaryCtaLabel: "Plan my China trip",
  ctas: [
    {
      id: "plan",
      label: "Plan my China trip",
      href: "/china-itinerary-planner#plan-trip",
      variant: "primary",
      trackingId: "prep-rail|plan",
    },
    {
      id: "kit",
      label: "Open Survival Checklist",
      href: "/survival-kit",
      variant: "secondary",
      trackingId: "prep-rail|kit",
    },
  ],
};

export const DEPARTURE_PREP_VISIBILITY: ActionRailVisibility = {
  // Hide on outbound jumps + pages that already have primary conversion UI
  hiddenPathPrefixes: [
    "/go",
    "/services",
    "/survival-kit",
    "/checkout",
    "/china-itinerary-planner",
    "/china-visa-checker",
    "/china-currency-converter",
    "/contact",
  ],
};

export const DEPARTURE_PREP_BEHAVIOR: ActionRailBehavior = {
  autoPromptStorageKey: "hct-prep-rail-auto",
  // Higher threshold + no dwell (dwellMs unused when ≤0 in hook)
  scrollThreshold: 0.55,
  dwellMs: 0,
};
