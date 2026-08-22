/** High-intent China travel FAQs for homepage SEO — link out to guides/hubs. */

export type HomeFaqLink = {
  href: string;
  label: string;
};

export type HomeFaqItem = {
  question: string;
  /** Plain-text answer for schema.org (no markdown links). */
  answerPlain: string;
  /** Short answer shown in UI; link rendered separately when present. */
  answerLead: string;
  link?: HomeFaqLink;
  links?: HomeFaqLink[];
};

export const homeFaqSection = {
  eyebrow: "Common questions",
  title: "China itinerary and first-trip FAQs",
  intro:
    "Custom itineraries, plus the visa, payments, and prep questions first-timers search before they land.",
} as const;

export const homeFaqs: HomeFaqItem[] = [
  {
    question: "Is a custom China itinerary a tour?",
    answerPlain:
      "No. A custom itinerary here is a PDF route you follow independently — city order, pace, and what to skip. It is not a guided package, bus tour, or group departure.",
    answerLead:
      "No. You get a PDF route to follow independently — not a guided package or group tour.",
    link: {
      href: "/services/custom-itinerary",
      label: "What’s in a custom itinerary",
    },
  },
  {
    question: "Should I plan my China trip myself or pay for a local PDF?",
    answerPlain:
      "DIY works if you already know city order, rail time, and how payments and data work. A local PDF is worth the fee when you have dates but the route still feels like a 12-city sprint, or you want someone on the ground to sequence pace and skips. Read the itinerary planning hub first, then the custom itinerary page for what a paid PDF includes.",
    answerLead:
      "DIY is fine if city order and systems already make sense. Pay for a local PDF when dates are real but the route still feels like too many cities — or you want pace and skips sequenced for you.",
    links: [
      {
        href: "/china-itinerary-planning",
        label: "Itinerary planning hub",
      },
      {
        href: "/services/custom-itinerary",
        label: "Custom itinerary details",
      },
    ],
  },
  {
    question: "What does a custom itinerary cost, and how do I start?",
    answerPlain:
      "Early-bird planning starts at $99 by trip length. The request form is free. We confirm scope and the matching fee before you pay; the PDF is delivered 48–72 hours after you confirm.",
    answerLead:
      "Early bird from $99 by trip length. The request is free — we confirm scope and fee before you pay.",
    link: {
      href: "/china-itinerary-planner#plan-trip",
      label: "Request a custom itinerary",
    },
  },
  {
    question: "Do I need a visa for China in 2026?",
    answerPlain:
      "It depends on your passport. Many nationalities now qualify for short visa-free stays or 240-hour transit. Check your passport before booking non-refundable flights.",
    answerLead:
      "It depends on your passport. Many nationalities qualify for short visa-free stays or 240-hour transit — confirm before you book.",
    link: {
      href: "/china-visa-checker",
      label: "Check your visa path",
    },
  },
  {
    question: "Can tourists use Alipay in China with an international card?",
    answerPlain:
      "Yes, many tourists can use Alipay with an eligible international card once setup and identity verification are complete. Prepare before you arrive.",
    answerLead:
      "Yes — many tourists can, once setup and identity verification are done. Don’t wait until you’re at a checkout counter.",
    link: {
      href: "/alipay-for-foreigners-china",
      label: "Alipay setup guide",
    },
  },
  {
    question: "Do I need a VPN in China?",
    answerPlain:
      "Not always. Mobile data via eSIM or roaming often works for international apps, but a VPN helps on hotel Wi-Fi, public Wi-Fi, and laptops for Google, WhatsApp, and Gmail.",
    answerLead:
      "Not always on mobile data — but a VPN is still useful backup for hotel Wi-Fi and laptop browsing.",
    link: {
      href: "/do-you-need-vpn-china",
      label: "Do you need a VPN?",
    },
  },
  {
    question: "Does Google Maps work in China?",
    answerPlain:
      "Google Maps is unreliable for everyday navigation in mainland China. Most travelers switch to Amap (Gaode) or Apple Maps with local data.",
    answerLead:
      "Usually not well enough for day-to-day travel. Plan on a local map app instead.",
    link: {
      href: "/google-maps-china-not-working",
      label: "Maps that work in China",
    },
  },
  {
    question: "Can foreigners book hotels in China easily?",
    answerPlain:
      "Yes, but some properties still have foreign-guest registration quirks. Book foreigner-friendly hotels and keep passport details ready for check-in.",
    answerLead:
      "Yes — just choose foreigner-friendly stays and keep your passport ready for real-name check-in.",
    link: {
      href: "/hotels-in-china-for-foreigners",
      label: "Hotels for foreigners",
    },
  },
  {
    question: "Should I get an eSIM or a local SIM for China?",
    answerPlain:
      "For short trips, a travel eSIM or roaming is often simpler. For longer stays, a local SIM can help if you need a Chinese phone number for SMS verification.",
    answerLead:
      "Short trips: eSIM or roaming is usually enough. Longer stays may need a local SIM for SMS codes.",
    link: {
      href: "/best-esim-for-china-travel",
      label: "Best eSIM options",
    },
  },
  {
    question: "Is China cashless for tourists?",
    answerPlain:
      "Not completely, but everyday spending is heavily mobile-first. Carry a little cash as backup while relying mainly on Alipay or WeChat Pay.",
    answerLead:
      "Mostly mobile-first — apps do the heavy lifting, cash is backup.",
    link: {
      href: "/payments-in-china",
      label: "Payments hub",
    },
  },
  {
    question: "Can foreigners travel independently in China?",
    answerPlain:
      "Yes. Independent travel is realistic if you prepare payments, internet, maps, hotels, and transport systems in advance.",
    answerLead:
      "Yes — prepare the digital basics first and independent travel becomes much easier.",
    link: {
      href: "/independent-travel-china",
      label: "Independent travel guide",
    },
  },
];
