/** Structured services & pricing — edit here, not in JSX. */

export const servicesPageMeta = {
  title: "China Travel Planning, On-Trip Help & Booking Fees",
  description:
    "Custom itinerary PDFs from $99 early bird, plus itinerary review, on-trip Q&A packs, and transparent booking help — for independent travelers, not tour groups.",
  keywords: [
    "China itinerary planning service",
    "custom China itinerary",
    "China travel planning price",
    "local China trip planner",
  ],
} as const;

export const servicesHero = {
  eyebrow: "Services & pricing",
  title: "Custom routes for independent travelers",
  subtitle:
    "1-on-1 itinerary planning built around your pace and interests — landmarks when you want them, local texture when you don't.",
} as const;

export const coreService = {
  id: "custom-itinerary",
  title: "1-on-1 Custom Itinerary Planning",
  subtitle:
    "A ready-to-follow PDF route for your dates, pace, and interests — hand-crafted locally. Paid PDF in 48–72 hours after you confirm.",
  body: "Skip the cookie-cutter routes. Every itinerary is hand-crafted by someone who actually grew up here — blending must-see landmarks with the hidden alleys, hands-on craft experiences, and everyday local culture that guidebooks never mention. You get a clear, ready-to-follow PDF route. Paid delivery is 48–72 hours after you confirm scope.",
  differentiator:
    "Local handcrafted routes — not another copy-paste landmark checklist.",
  deliveryLabel: "48–72 hours after confirm",
  earlyBirdDeadline: "2027-01-01",
  earlyBirdLabel: "Early bird (founding rate)",
  regularLabel: "Regular price (after early-bird)",
  currency: "USD",
  cta: {
    label: "Plan my China trip",
    href: "/china-itinerary-planner#plan-trip",
    trackingEvent: "services_core_cta_click",
  },
  tiers: [
    {
      id: "up-to-5",
      daysLabel: "Up to 5 days",
      earlyBird: 99,
      regular: 129,
    },
    {
      id: "6-to-10",
      daysLabel: "6–10 days",
      earlyBird: 129,
      regular: 169,
    },
    {
      id: "over-10",
      daysLabel: "10+ days",
      earlyBird: 199,
      regular: 219,
    },
  ],
} as const;

export const addonBonus = {
  title: "Free Bonus",
  lead: "Every custom itinerary includes our Complete China Survival Kit",
  detail:
    "Visa checklist, VPN & eSIM setup, Alipay / WeChat Pay guide, and offline map tools — so you're ready before you even land.",
  href: "/survival-kit",
  checklistSource: "kitChecklistItems" as const,
} as const;

export type { ServiceCardProps, ServiceCtaAction } from "./secondary-services";
export {
  secondaryServices,
  servicesTransition,
} from "./secondary-services";

export type ServicesFaqItem = {
  question: string;
  answer: string;
};

export const servicesFaqs: ServicesFaqItem[] = [
  {
    question: "Do I pay a deposit? What's the refund policy?",
    answer:
      "Custom itinerary work starts after we confirm scope and pricing for your dates. If we haven't started drafting, unused fees can be refunded. Once a PDF draft is delivered, planning fees are non-refundable — but we're happy to revise within the agreed round of edits.",
  },
  {
    question: "How many itinerary revisions are included?",
    answer:
      "Your package includes one structured revision after the first draft (timing tweaks, swaps, pace changes). Larger redesigns or adding many new cities may need an hourly top-up — we'll flag that before doing extra work.",
  },
  {
    question: "Do you mark up hotels, tickets, or flights when you book for me?",
    answer:
      "No. Booking help charges a transparent service fee only. You pay the platform price for the item, and we send the receipt so you can verify.",
  },
  {
    question: "Are there exceptions to the 30-minute on-trip response window?",
    answer:
      "The 30-minute window applies during business hours (9AM–9PM Mon–Fri, China time) for typical questions. Complex medical, legal, or after-hours issues may take longer — and this pack is information support, not emergency dispatch or 24/7 concierge.",
  },
  {
    question: "What happens after I submit the itinerary form?",
    answer:
      "We'll reply within 24–48 hours to confirm your trip scope and the matching early-bird or regular fee (from $99 by trip length). Custom PDF planning starts after you confirm — Survival Kit is included as a bonus with paid custom itineraries.",
  },
];

export const servicesStickyCta = {
  label: "Plan my China trip",
  href: "/china-itinerary-planner#plan-trip",
  trackingEvent: "services_sticky_cta_click",
} as const;
