/**
 * Local Partner positioning copy for About (and future Services).
 * Source of truth for messaging: webiste_info.md §1 / §1.1
 */

import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/trust/copy";

export const partnerHero = {
  eyebrow: "Local partner",
  title: "Your local partner for independent China travel",
  lead: "We help independent travelers plan and move through China with local clarity — not a tour group, not a guidebook alone.",
  primaryCta: PRIMARY_CTA_LABEL,
  secondaryCta: SECONDARY_CTA_LABEL,
} as const;

export const partnerWhoWeAre = {
  title: "Who we are",
  paragraphs: [
    "We are a China travel partner for visitors who want to travel independently — not join a tour group.",
    "We offer one-to-one pre-trip planning, optional on-trip help during business hours, and calm guidance when something goes wrong. Our role is a bridge of information and lived experience — not a traditional travel agency, and not a tour guide.",
  ],
  oneLiner: "Your local partner for independent travel.",
} as const;

export type PartnerService = {
  id: string;
  phase: "Before you go" | "During your trip";
  label: string;
  title: string;
  body: string;
  accent?: "teal" | "palm" | "coral";
};

export const partnerServices: PartnerService[] = [
  {
    id: "custom-plan",
    phase: "Before you go",
    label: "Primary",
    title: "1:1 private itinerary planning",
    body: "A tailored route with local, lesser-known experiences — old streets locals love, craft workshops, everyday culture — not a stack of standard tourist stops.",
    accent: "teal",
  },
  {
    id: "review",
    phase: "Before you go",
    label: "Also available",
    title: "Advice on an itinerary you already have",
    body: "Already sketched a plan? We’ll review it with a local lens — pacing, logistics, and where a small change makes the trip feel more real.",
    accent: "palm",
  },
  {
    id: "survival-included",
    phase: "Before you go",
    label: "Included",
    title: "Full survival prep guide",
    body: "What to set up before you fly: payments, connectivity, maps, bookings — so you are not improvising at the airport.",
    accent: "coral",
  },
  {
    id: "consult-pack",
    phase: "During your trip",
    label: "Add-on · from $29.90",
    title: "On-trip quick help",
    body: "5 quick-answer credits for those “what do I do now” moments. Message during business hours (9AM–9PM Mon–Fri, China time) and get a real answer within ~30 minutes for typical questions — not round-the-clock coverage.",
    accent: "teal",
  },
  {
    id: "booking-help",
    phase: "During your trip",
    label: "Optional",
    title: "Ticket & hotel booking help",
    body: "Need something booked locally? We can help. We stay commission-neutral with attractions and hotels — if we book for you, we charge a clear service fee and can provide an invoice.",
    accent: "palm",
  },
];

export const partnerConsultTagline =
  "We don’t solve every problem for you — we help you find the path fast inside China’s information blind spots.";

export type SupportScenario = {
  id: string;
  category: string;
  items: string[];
};

export const supportScenarios: SupportScenario[] = [
  {
    id: "transport",
    category: "Transport",
    items: [
      "Missed the last metro or last bus — what now?",
      "How foreigners actually use ride-hailing apps",
      "QR / scan-to-pay failed at the curb",
    ],
  },
  {
    id: "payments",
    category: "Payments",
    items: [
      "Card declined or “system error” — backup paths",
      "Where and how to get cash safely",
    ],
  },
  {
    id: "communication",
    category: "Communication",
    items: [
      "Explaining what you need to a driver or shop without Chinese",
      "Emergency phrases when translation apps fail",
    ],
  },
  {
    id: "emergencies",
    category: "When things go wrong",
    items: [
      "Passport or phone lost — who to contact first",
      "Lost, offline, and no map — first calm steps",
    ],
  },
];

export type WhyUsBlock = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const whyChooseUs: WhyUsBlock[] = [
  {
    id: "vs-ai",
    title: "Why us when AI already answers everything?",
    paragraphs: [
      "AI answers can look perfect — and still be wrong. Without lived experience, advice often has no temperature and no “I’m standing there with you” feel.",
      "AI also cannot take real-world actions: contacting a driver, reading a local situation, or walking you through a payment failure at the counter.",
      "We bring on-the-ground experience, human warmth, and execution where AI stops — accuracy plus action.",
    ],
  },
  {
    id: "vs-agency",
    title: "Why us when agencies offer free itineraries?",
    paragraphs: [
      "We do not take commissions from attractions, hotels, or OTAs. There is no inventory to push — recommendations stay on your side.",
      "Planning is one-to-one, not a recycled template. Optional paid on-trip help (business hours, China time) can walk you through paths like finding a hospital after a sprain — information support, not 24/7 concierge.",
      "Agencies sell standardized days. We plan distinctive days — famous sights when they matter, plus local craft, neighborhoods, and everyday culture.",
      "If we book tickets or hotels for you, we issue an invoice and charge only a service fee.",
    ],
  },
  {
    id: "advantage",
    title: "Our hard-to-copy advantage",
    paragraphs: [
      "Raised in China, lived overseas for years — a two-way understanding that is difficult to fake.",
      "We know the fears travelers carry before they arrive: Is it safe? What if I don’t speak the language? What if the card fails? What if I can’t reach family on Instagram? What if the visa or passport is lost?",
      "Our work is to bridge that gap — so you can explore China with more clarity and less panic.",
    ],
  },
];
