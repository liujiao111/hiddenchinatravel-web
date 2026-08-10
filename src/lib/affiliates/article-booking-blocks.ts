/**
 * High-intent article → optional booking / compare block (before End CTA → Planner).
 * Affiliates stay secondary; copy is calm and scenario-based.
 */

export type ArticleBookingBlock = {
  eyebrow: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const blocksBySlug: Record<string, ArticleBookingBlock> = {
  "hotels-in-china-for-foreigners": {
    eyebrow: "Optional booking path",
    title: "Ready to lock a hotel?",
    body: "Trip.com works in English with many foreign cards — useful once you know the area and dates.",
    primary: { label: "Browse Trip.com hotels", href: "/go/trip-hotels" },
    secondary: { label: "Open Survival Kit", href: "/survival-kit" },
  },
  "book-china-high-speed-rail-foreigners": {
    eyebrow: "Optional booking path",
    title: "Book trains in English",
    body: "When passport booking on official apps feels stuck, Trip.com trains is a practical fallback.",
    primary: { label: "Open Trip.com trains", href: "/go/trip-trains" },
    secondary: { label: "Transport hub", href: "/transport-in-china" },
  },
  "china-attraction-ticket-booking-foreigners-2026": {
    eyebrow: "Optional booking path",
    title: "Check English ticket inventory",
    body: "For popular sights, confirm availability on Trip.com before wrestling with official Chinese apps.",
    primary: { label: "Browse Trip.com tickets", href: "/go/trip-tickets" },
    secondary: {
      label: "Tickets hub",
      href: "/attraction-tickets-in-china",
    },
  },
  "why-china-attractions-require-reservations": {
    eyebrow: "Optional booking path",
    title: "Reserve timed entry early",
    body: "If the official channel is sold out or unclear, check English listings on Trip.com as a backup path.",
    primary: { label: "Browse Trip.com tickets", href: "/go/trip-tickets" },
  },
  "best-esim-for-china-travel": {
    eyebrow: "Compare options",
    title: "Pick data before you fly",
    body: "Airalo is the simple data specialist; Trip.com eSIM fits if you already book hotels there.",
    primary: { label: "Get Airalo eSIM", href: "/go/airalo" },
    secondary: { label: "Trip.com eSIM", href: "/go/trip-esim" },
  },
  "china-sim-card-for-foreigners": {
    eyebrow: "Compare options",
    title: "Need data without a local SIM first?",
    body: "Many short-trip visitors start with a travel eSIM, then decide on a +86 SIM only if they need SMS codes.",
    primary: { label: "Get Airalo eSIM", href: "/go/airalo" },
    secondary: { label: "Internet hub", href: "/internet-in-china" },
  },
  "best-vpn-for-china": {
    eyebrow: "Compare options",
    title: "Install and test before you land",
    body: "NordVPN is our usual travel pick; ExpressVPN if you already prefer that app.",
    primary: { label: "Try NordVPN", href: "/go/nordvpn" },
    secondary: { label: "ExpressVPN", href: "/go/expressvpn" },
  },
  "do-you-need-vpn-china": {
    eyebrow: "Compare options",
    title: "If you decide you need a VPN",
    body: "Install at home and test once — hotel Wi-Fi is a bad place to start from zero.",
    primary: { label: "Try NordVPN", href: "/go/nordvpn" },
    secondary: { label: "VPN comparison guide", href: "/best-vpn-for-china" },
  },
  "digital-survival-china-internet-guide": {
    eyebrow: "Optional setup path",
    title: "Sort data + VPN before departure",
    body: "eSIM for mobile data, VPN for hotel Wi-Fi and blocked apps — set both up at home when you can.",
    primary: { label: "Get Airalo eSIM", href: "/go/airalo" },
    secondary: { label: "Try NordVPN", href: "/go/nordvpn" },
  },
  "digital-survival-china-transport-guide": {
    eyebrow: "Optional booking path",
    title: "Trains and tickets in English",
    body: "Use Trip.com when you want foreign-card checkout for intercity trains or attraction tickets.",
    primary: { label: "Trip.com trains", href: "/go/trip-trains" },
    secondary: { label: "Trip.com tickets", href: "/go/trip-tickets" },
  },
};

export function getArticleBookingBlock(
  slug: string | undefined,
): ArticleBookingBlock | null {
  if (!slug) return null;
  return blocksBySlug[slug] ?? null;
}
