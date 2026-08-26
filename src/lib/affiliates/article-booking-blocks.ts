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
    eyebrow: "Install two before you fly",
    title: "ExpressVPN for a simple trip — NordVPN as backup",
    body: "No VPN is always on in China. ExpressVPN is the least fiddly tourist app. I still run NordVPN myself — it works, but connecting can take a long time. Hotel Wi-Fi is a bad place to start from zero.",
    primary: { label: "Get ExpressVPN", href: "/go/expressvpn" },
    secondary: { label: "Get NordVPN", href: "/go/nordvpn" },
    lead: {
      eyebrow: "Install at home",
      title: "Two VPNs beat one favorite",
      hint: "ExpressVPN for a short trip. NordVPN is what I use — slower to connect on hotel Wi-Fi.",
    },
  },
  "do-you-need-vpn-china": {
    eyebrow: "Hotel Wi-Fi",
    title: "If you’ll use hotel Wi-Fi, install before you fly",
    body: "Short trips on eSIM mobile data often skip a VPN. Hotel and public Wi-Fi usually cannot. Pick ExpressVPN vs NordVPN in the comparison — then install before you land.",
    primary: { label: "Compare VPNs for China", href: "/best-vpn-for-china" },
    secondary: { label: "Get ExpressVPN", href: "/go/expressvpn" },
    lead: {
      eyebrow: "If you’ll use hotel Wi-Fi",
      title: "Install a VPN before you fly",
      hint: "eSIM data is often enough for a few days. Hotel networks usually are not. See ExpressVPN vs NordVPN.",
    },
  },
  "digital-survival-china-internet-guide": {
    eyebrow: "Set up before you fly",
    title: "Sort data + VPN before departure",
    body: "eSIM for mobile data, VPN for hotel Wi-Fi and blocked apps — set both up at home when you can. Short trip VPN: ExpressVPN. I still run NordVPN.",
    primary: { label: "Get Airalo eSIM", href: "/go/airalo" },
    secondary: { label: "Get ExpressVPN", href: "/go/expressvpn" },
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
