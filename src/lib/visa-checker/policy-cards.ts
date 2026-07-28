export type PolicyCard = {
  id: string;
  title: string;
  definition: string;
  bullets: string[];
  learnMoreHref: string;
};

export const policyCards: PolicyCard[] = [
  {
    id: "visa-free-30",
    title: "30-day unilateral visa-free",
    definition:
      "Short stays without a visa for eligible passport holders visiting for tourism, business, family visits, or transit.",
    bullets: [
      "Up to 30 days for qualifying nationalities",
      "Must hold a valid ordinary passport",
      "Activities limited to permitted purposes",
    ],
    learnMoreHref: "#faq-visa-free-countries",
  },
  {
    id: "transit-240",
    title: "240-hour visa-free transit",
    definition:
      "Transit without a visa while traveling to a third country, within approved regions and entry ports.",
    bullets: [
      "Up to 240 hours (10 days) in designated areas",
      "Onward ticket to a third country required",
      "Cannot change to other visa types in-country easily",
    ],
    learnMoreHref: "#faq-240-hour-transit",
  },
  {
    id: "standard-visa",
    title: "Standard visa (L / M / Q / etc.)",
    definition:
      "Required when visa-free policies do not apply — for longer stays, work, study, or certain nationalities.",
    bullets: [
      "Apply before travel at embassy or visa center",
      "Type depends on purpose: L, M, Q, X, Z, etc.",
      "Processing time varies — plan several weeks ahead",
    ],
    learnMoreHref: "/survival-guides",
  },
];
