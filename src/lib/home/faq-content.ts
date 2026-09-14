/** High-intent China travel FAQs for homepage SEO — link out to journeys and practical guides. */

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
  title: "Yunnan journeys and first-trip FAQs",
  intro:
    "Private Yunnan journeys, plus the visa, payments, internet, maps and prep questions first-time China travelers ask before they land.",
} as const;

export const homeFaqs: HomeFaqItem[] = [
  {
    question: "Do you offer private tours in Yunnan?",
    answerPlain:
      "Yes. Hidden China Travel focuses on private Yunnan journeys for your own party, with flexible pacing, local experiences and support before and during the trip. Our current featured route connects Dali, Shaxi and Lijiang.",
    answerLead:
      "Yes. Our current focus is private Yunnan journeys for your own party, starting with Dali, Shaxi and Lijiang.",
    link: {
      href: "/journeys/dali-shaxi-lijiang-tour",
      label: "Explore our Yunnan journey",
    },
  },
  {
    question: "Can your Yunnan journeys be customized?",
    answerPlain:
      "Yes. The published journey is a starting point rather than a rigid package. We can discuss pace, hotel preferences, more time in a destination, and route adjustments before the final proposal is confirmed.",
    answerLead:
      "Yes. The published route is a starting point — pace, hotels and the balance between destinations can be adjusted before the final proposal.",
    link: {
      href: "/contact",
      label: "Tell us about your plans",
    },
  },
  {
    question: "Who operates your Yunnan trips?",
    answerPlain:
      "Hidden China Travel helps shape the journey, answers questions and coordinates the planning experience. On-the-ground services such as guides, drivers and other trip operations are provided through licensed local travel partners, with the exact arrangement confirmed in your proposal.",
    answerLead:
      "We shape the journey and support the planning process; licensed local travel partners provide the on-the-ground services confirmed in your proposal.",
    link: {
      href: "/about",
      label: "How Hidden China Travel works",
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
