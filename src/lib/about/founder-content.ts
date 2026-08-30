/**
 * Founder narrative — single source for trust copy sitewide.
 * Aligns with webiste_info.md § Founder narrative baseline.
 */

import {
  SITE_FOUNDER_NAME,
  SITE_FOUNDER_PATH,
  SITE_NAME,
} from "@/lib/constants";

export const founderAssets = {
  avatar: "/brand/founder/avatar-joy.webp",
  portrait: "/brand/founder/portrait.webp",
  originYunnan: "/brand/founder/origin-yunnan.webp",
  originChina: "/brand/founder/origin-china.webp",
  sceneYunnan: "/brand/founder/scene-yunnan.webp",
  sceneKunming: "/brand/founder/scene-kunming.webp",
  sceneSoutheastAsia: "/brand/founder/scene-southeast-asia.webp",
  sceneChina: "/brand/founder/china-breadth.webp",
  sceneMisty: "/brand/founder/misty-lake.webp",
  sceneOverseas: "/brand/founder/overseas-river.webp",
} as const;

export type FounderPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const founderOriginPhotos: FounderPhoto[] = [
  {
    src: founderAssets.originYunnan,
    alt: "Forest stream and mist in southwest China",
    caption: "Yunnan — where I grew up",
    width: 1200,
    height: 1600,
  },
  {
    src: founderAssets.originChina,
    alt: "Snowy forest and mountains in northern China",
    caption: "Road trips across China",
    width: 1200,
    height: 800,
  },
];

export const founderSceneGallery: FounderPhoto[] = [
  {
    src: founderAssets.sceneYunnan,
    alt: "Forest stream and mist in southwest China",
    caption: "Southwest forest & mist — Yunnan texture I plan from",
    width: 1200,
    height: 1600,
  },
  {
    src: founderAssets.sceneKunming,
    alt: "Autumn cypress trees reflected in a Kunming lake",
    caption: "Kunming — where I live between trips",
    width: 1200,
    height: 900,
  },
  {
    src: founderAssets.sceneSoutheastAsia,
    alt: "Palm-lined river with small boats in Southeast Asia",
    caption: "Southeast Asia — I know the foreign-visitor side too",
    width: 1200,
    height: 1600,
  },
];

export const founderAboutHero = {
  originHook:
    "Visa rules opened up — but the advice got louder and more contradictory. I built this site to close that information gap.",
} as const;

export const founderOriginStory = {
  title: "Why I started this",
  paragraphs: [
    "I grew up in Yunnan — alley markets, small restaurants, and Erhai villages that never make the standard checklist. That is the texture I still measure trips against.",
    "Later I lived and traveled across China — Chongqing, Guangzhou, Beijing, Chengdu, and road trips to places like Sayram Lake — so I know the country is bigger than one province.",
    "Then I spent two years in Japan and two years in the Philippines, living as a foreign visitor for the first time. SIM cards, QR payments, contradictory blog posts — I felt the same anxiety many first-time China travelers describe now.",
    "I returned to Kunming in 2025. In early 2026 I started Hidden China Travel because more independent travelers were arriving — and the gap between polished marketing and what actually works on the ground felt wider than ever.",
    `${SITE_NAME} is not a tour agency. It is a way to help you judge what to trust — and send a route you can run on your own.`,
  ],
} as const;

export const founderBackgroundBullets = [
  "Raised in Yunnan · lived across several Chinese cities",
  "Two years in Japan · two years in the Philippines as a foreign visitor",
  "Back in Kunming since 2025 · building this site since early 2026",
] as const;

export const founderOverseasMirror =
  "I've also traveled as a tourist elsewhere — Phuket, Kota Kinabalu, Fuji, Australia, Bohol — enough to remember what it feels like when a country works differently from the guide you read.";

export type HowIJudgeCard = {
  id: string;
  title: string;
  body: string;
};

export const howIJudgeCards: HowIJudgeCard[] = [
  {
    id: "towns",
    title: "Old towns & overnight stops",
    body: "I ask whether the town still has morning life after the day-trippers leave — not whether it photographed well at golden hour. One quiet night beats three bus-transfer photo stops.",
  },
  {
    id: "food",
    title: "Restaurants",
    body: "I look for places locals repeat, not the listicle with English menus added last month. If a spot only works with a reservation broker or a tour bus, I say so plainly.",
  },
  {
    id: "hotels",
    title: "Hotels & neighborhoods",
    body: "Location beats star rating: can you walk to food, get a ride at night, and recover from jet lag without a taxi every time? I flag foreigner-friendly check-in friction before you book.",
  },
  {
    id: "routes",
    title: "Routes & pacing",
    body: "I plan for energy, altitude, and train clocks — not maximum pins on a map. A day with one meaningful stop often beats two cities checked off for Instagram.",
  },
];

export const founderProfile = {
  title: `I'm ${SITE_FOUNDER_NAME}`,
  portrait: {
    src: founderAssets.portrait,
    alt: `${SITE_FOUNDER_NAME} in a tropical garden`,
  },
  paragraphs: [
    `I'm ${SITE_FOUNDER_NAME}, based in Kunming, Yunnan. I grew up in this province, left to live in Japan and the Philippines, and came back with a clearer view of what foreign visitors actually need — not more lists, but better judgment.`,
    founderOverseasMirror,
    `WhatsApp may show a Philippine number from my years there. I work from Kunming and reply during China business hours.`,
  ],
} as const;

export const founderTrustChip = {
  name: SITE_FOUNDER_NAME,
  line: "Based in Kunming — raised in Yunnan, lived in Japan & the Philippines as a foreign visitor.",
  href: SITE_FOUNDER_PATH,
  avatar: founderAssets.avatar,
} as const;

export const plannerTrustLine = `${SITE_FOUNDER_NAME}, based in Kunming — raised in Yunnan, lived overseas as a foreign visitor. No spam, no pushy sales calls.`;

export const contactWhoReplies = {
  title: "Who replies",
  body: `${SITE_FOUNDER_NAME} reads every message. Planner requests and general questions go to the same inbox — usually within business hours (China time).`,
} as const;

export const authorBioLine =
  "Raised in Yunnan, lived in Japan and the Philippines as a foreign visitor — practical China notes, not a tour script.";

export const homeWhyExists = {
  eyebrow: "Why this exists",
  lines: [
    "China opened more doors for independent travelers.",
    "The guides multiplied — and contradicted each other.",
    "I've lived on both sides of that gap.",
  ],
  ctaLabel: "Read why I started",
  ctaHref: "/about#why-i-started",
  image: {
    src: founderAssets.sceneKunming,
    alt: "Autumn cypress trees reflected in a Kunming lake",
    width: 1200,
    height: 900,
  },
} as const;

export const yunnanWhyIKnow = {
  eyebrow: "Local lens",
  title: "Why I know Yunnan",
  paragraphs: [
    "I grew up here — not as a weekend visitor. Erhai villages, Kunming markets, and the train pacing between Dali and Lijiang are home context, not research tabs.",
    "When I plan a Yunnan loop, I weigh altitude, rain, and which old town is worth a night versus a two-hour photo stop. That is the difference between a checklist and a week you can actually run.",
  ],
  image: {
    src: "/brand/destinations/yunnan/hero-erhai.webp",
    alt: "White village on Erhai's shore under mountains, Dali, Yunnan",
  },
  founderHref: "/about#founder",
} as const;

export const founderKnowsAbout = [
  "Independent travel in China",
  "Yunnan travel planning",
  "China visa and entry requirements",
  "Digital payments in China",
  "China rail and local transport for foreigners",
  "First-time China travel preparation",
] as const;
