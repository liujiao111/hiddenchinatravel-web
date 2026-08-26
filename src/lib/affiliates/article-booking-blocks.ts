/**
 * High-intent article → booking / setup block (before End CTA).
 * `lead` renders a compact solid CTA under the title (first viewport).
 */

export type ArticleLeadCta = {
  eyebrow: string;
  title: string;
  hint?: string;
};

export type ArticleBookingBlock = {
  eyebrow: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Compact first-viewport CTA. Omit to skip the lead bar. */
  lead?: ArticleLeadCta;
};

const blocksBySlug: Record<string, ArticleBookingBlock> = {
  "hotels-in-china-for-foreigners": {
    eyebrow: "Book in English",
    title: "Search hotels that accept foreign passports",
    body: "Trip.com filters properties that can check you in. Booking.com often does not — confirm Guests Accepted before you pay.",
    primary: { label: "Search Trip.com hotels", href: "/go/trip-hotels" },
    secondary: { label: "Get Free Survival Kit", href: "/survival-kit" },
    lead: {
      eyebrow: "Before you book",
      title: "Use Trip.com, not Booking.com",
      hint: "Filter for hotels that accept foreign passports.",
    },
  },
  "book-china-high-speed-rail-foreigners": {
    eyebrow: "Book in English",
    title: "Book trains in English",
    body: "When passport booking on official apps feels stuck, Trip.com trains is the practical fallback — same 12306 inventory, foreign cards.",
    primary: { label: "Open Trip.com trains", href: "/go/trip-trains" },
    secondary: { label: "Transport hub", href: "/transport-in-china" },
  },
  "china-attraction-ticket-booking-foreigners-2026": {
    eyebrow: "Book in English",
    title: "Check English ticket inventory",
    body: "For popular sights, confirm availability on Trip.com before wrestling with official Chinese apps.",
    primary: { label: "Browse Trip.com tickets", href: "/go/trip-tickets" },
    secondary: {
      label: "Tickets hub",
      href: "/attraction-tickets-in-china",
    },
    lead: {
      eyebrow: "Book in English",
      title: "Check tickets on Trip.com first",
      hint: "Foreign cards and passport checkout — before WeChat mini-programs.",
    },
  },
  "why-china-attractions-require-reservations": {
    eyebrow: "Book in English",
    title: "Reserve timed entry early",
    body: "If the official channel is sold out or unclear, check English listings on Trip.com as a backup path.",
    primary: { label: "Browse Trip.com tickets", href: "/go/trip-tickets" },
  },
  "best-esim-for-china-travel": {
    eyebrow: "Set up before you fly",
    title: "Get a mainland China eSIM",
    body: "Airalo is the default for a first China data eSIM. Confirm the plan says Mainland China — not Hong Kong or Macau only.",
    primary: { label: "Get Airalo eSIM", href: "/go/airalo" },
    secondary: { label: "Trip.com eSIM", href: "/go/trip-esim" },
    lead: {
      eyebrow: "Data before you land",
      title: "Get an Airalo eSIM for mainland China",
      hint: "Install at home. Confirm the plan says Mainland China, not Hong Kong only.",
    },
  },
  "china-sim-card-for-foreigners": {
    eyebrow: "Short trip?",
    title: "Need data before the store queue?",
    body: "Under two weeks and you only need maps and WhatsApp: start with a travel eSIM. Buy a +86 SIM later if you need SMS codes.",
    primary: { label: "Get Airalo eSIM", href: "/go/airalo" },
    secondary: { label: "Internet hub", href: "/internet-in-china" },
    lead: {
      eyebrow: "Landing in under two weeks?",
      title: "Start with an Airalo eSIM",
      hint: "Skip the airport queue unless you need a +86 number for SMS.",
    },
  },
  "best-vpn-for-china": {
    eyebrow: "What I actually use",
    title: "NordVPN is what I run — ExpressVPN is the simpler backup",
    body: "No VPN is always on in China. I use NordVPN: it connects, but hotel Wi-Fi can sit on Connecting for a long time. ExpressVPN is easier to tap — I have not used it as my daily China VPN.",
    primary: { label: "Get NordVPN", href: "/go/nordvpn" },
    secondary: { label: "Get ExpressVPN", href: "/go/expressvpn" },
    lead: {
      eyebrow: "What I actually use",
      title: "NordVPN is what I run in China",
      hint: "It works. Connecting can take a long time. ExpressVPN is simpler — I have not used it as my daily China VPN.",
    },
  },
  "do-you-need-vpn-china": {
    eyebrow: "Need vs not need",
    title: "eSIM data is often enough. Hotel Wi-Fi is not.",
    body: "A few days on mobile data often skip a VPN. Hotel and public Wi-Fi usually cannot. If you need an app, I use NordVPN — Express is a simpler backup I have not daily-tested in China.",
    primary: { label: "Compare VPNs for China", href: "/best-vpn-for-china" },
    secondary: {
      label: "Best eSIM for China",
      href: "/best-esim-for-china-travel",
    },
    lead: {
      eyebrow: "Need vs not need",
      title: "eSIM data is often enough. Hotel Wi-Fi is not.",
      hint: "Read the split first. If hotel Wi-Fi is in your plan, install at home — I use NordVPN.",
    },
  },
  "digital-survival-china-internet-guide": {
    eyebrow: "Set up before you fly",
    title: "Sort data + VPN before departure",
    body: "eSIM for mobile data, VPN for hotel Wi-Fi and local SIMs — set those up at home when they apply. I use NordVPN. ExpressVPN is a simpler backup I have not daily-tested in China.",
    primary: { label: "Get Airalo eSIM", href: "/go/airalo" },
    secondary: { label: "Get NordVPN", href: "/go/nordvpn" },
  },
  "digital-survival-china-transport-guide": {
    eyebrow: "Book in English",
    title: "Trains and tickets in English",
    body: "Use Trip.com when you want foreign-card checkout for intercity trains or attraction tickets.",
    primary: { label: "Trip.com trains", href: "/go/trip-trains" },
    secondary: { label: "Trip.com tickets", href: "/go/trip-tickets" },
  },
  "chinese-id-number-foreigners": {
    eyebrow: "If the official form only accepts 身份证",
    title: "Switch to a passport booking path",
    body: "English hotel and ticket checkout stores your passport instead of a citizen ID. If you still need payments and data for day one, grab the Survival Kit next.",
    primary: { label: "Browse Trip.com tickets", href: "/go/trip-tickets" },
    secondary: { label: "Get Free Survival Kit", href: "/survival-kit" },
  },
};

export function getArticleBookingBlock(
  slug: string | undefined,
): ArticleBookingBlock | null {
  if (!slug) return null;
  return blocksBySlug[slug] ?? null;
}
