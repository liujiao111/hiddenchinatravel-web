/** Homepage + destinations hub shared content (intent-layered IA). */

/** Hero search shortcuts — high-intent queries → articles/tools */
export const homePopularSearches = [
  { label: "vpn", href: "/do-you-need-vpn-china" },
  { label: "esim", href: "/best-esim-for-china-travel" },
  { label: "alipay", href: "/alipay-for-foreigners-china" },
  { label: "visa", href: "/do-i-need-a-visa-for-china" },
] as const;

export type DestinationCity = {
  id: string;
  name: string;
  /** Short eyebrow for cards — human label, not the slug */
  label: string;
  pitch: string;
  guidesHint: string;
};

export const destinationCities: DestinationCity[] = [
  {
    id: "beijing",
    name: "Beijing",
    label: "Capital base",
    pitch: "Capital history, hutongs, and a practical first-city base for many arrivals.",
    guidesHint: "Entry city · culture & logistics",
  },
  {
    id: "shanghai",
    name: "Shanghai",
    label: "Gateway city",
    pitch: "Transit hubs, riverside neighborhoods, and a smoother start for first-timers.",
    guidesHint: "Gateway · urban & coastal",
  },
  {
    id: "xian",
    name: "Xi'an",
    label: "History stop",
    pitch: "Terracotta warriors, city walls, and a strong Silk Road history stop.",
    guidesHint: "History · multi-city routes",
  },
  {
    id: "chengdu",
    name: "Chengdu",
    label: "Western China",
    pitch: "Food, pandas, and a calm pace before heading into Sichuan or Yunnan.",
    guidesHint: "Food · western China base",
  },
  {
    id: "kunming",
    name: "Kunming",
    label: "Yunnan launch",
    pitch: "Spring weather and a natural launchpad into Yunnan’s landscapes.",
    guidesHint: "Yunnan · regional travel",
  },
  {
    id: "guilin",
    name: "Guilin & Yangshuo",
    label: "Karst scenery",
    pitch: "Karst rivers, countryside stays, and classic south China scenery.",
    guidesHint: "Scenery · slower days",
  },
];

export const homeTools = [
  {
    id: "planner",
    href: "/china-itinerary-planner",
    title: "China Itinerary Planner",
    body: "Sketch cities, days, and routes before you book — the calmest way to turn ideas into a trip.",
    cta: "Plan my China trip",
    featured: true,
  },
  {
    id: "visa",
    href: "/china-visa-checker",
    title: "China Visa Checker",
    body: "See visa-free, 240-hour transit, or tourist visa needs by passport and trip length.",
    cta: "Check visa rules",
    featured: false,
  },
  {
    id: "kit",
    href: "/survival-kit",
    title: "Survival Kit",
    body: "First-trip essentials for payments, maps, data, and booking — ready before airport pressure.",
    cta: "Get Free Survival Kit",
    featured: false,
  },
] as const;

/** Curated catalog links when markdown posts are sparse. */
export const featuredGuideFallbacks = [
  {
    title: "China Visa Checker",
    href: "/china-visa-checker",
    excerpt: "Check visa-free and transit options before you book flights.",
  },
  {
    title: "Payments in China",
    href: "/payments-in-china",
    excerpt: "Alipay, WeChat Pay, and paying calmly with a foreign card.",
  },
  {
    title: "Internet in China",
    href: "/internet-in-china",
    excerpt: "eSIM, SIM, and staying connected without the usual stress.",
  },
  {
    title: "Hotels for Foreigners",
    href: "/hotels-in-china-for-foreigners",
    excerpt: "Foreign-guest check-in explained without drama.",
  },
] as const;

/** Hero-adjacent trust strip — claim + 3 icon points */
export const homeWhyUs = {
  claim:
    "Your local partner for independent China travel — practical help with visas, payments, internet, and on-trip questions.",
  storyCta: "Learn our story",
  storyHref: "/about#why-us",
  points: [
    {
      id: "experience",
      title: "Lived experience on the ground",
      body: "Alipay declined at a stall? We walk you through backup payment paths during business hours — calm, step-by-step help, not a 24/7 concierge.",
      inlineLink: {
        href: "/services#differentiator",
        label: "See on-trip help scenarios",
      },
    },
    {
      id: "support",
      title: "Planning first — optional help on the ground",
      body: "Pre-trip planning is the core. Optional on-trip help is available Mon–Fri 9AM–9PM China time when plans change.",
    },
    {
      id: "commission",
      title: "Transparent fees, your side first",
      body: "We don't take kickbacks from hotels or attractions — only a clear service fee, with invoices provided.",
    },
  ],
} as const;

