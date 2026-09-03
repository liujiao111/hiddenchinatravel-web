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
    eyebrow: "Choose before you fly",
    title: "Compare exact 7-day and 15-day plans",
    body: "Use the plan picker above to compare Trip.com and Airalo by daily allowance, total data, speed limits, and current price.",
    primary: { label: "Compare the six plans", href: "#esim-plan-picker" },
    secondary: {
      label: "Need a +86 number instead?",
      href: "/china-sim-card-for-foreigners",
    },
  },
  "trip-com-esim-china-review": {
    eyebrow: "Trip.com eSIM",
    title: "See Trip.com's exact 7-day and 15-day prices",
    body: "Three SKUs compared with current prices — the cheapest is $8.81 for a normal 7-day trip.",
    primary: {
      label: "See Trip.com's China plans",
      href: "/go/trip-esim-7d-3gb",
    },
    secondary: {
      label: "Compare with Airalo",
      href: "/best-esim-for-china-travel#esim-plan-picker",
    },
    lead: {
      eyebrow: "Trip.com eSIM",
      title: "See Trip.com's exact China eSIM prices",
      hint: "3 plans compared — 7-day and 15-day, current prices checked September 3, 2026.",
    },
  },
  "china-sim-card-for-foreigners": {
    eyebrow: "Short trip?",
    title: "Compare eSIM plans before you buy",
    body: "Under two weeks and you only need maps and WhatsApp: a travel eSIM skips the store queue. See exact Trip.com and Airalo plans and prices before choosing. Buy a +86 SIM instead if you need SMS codes.",
    primary: {
      label: "Compare exact eSIM plans",
      href: "/best-esim-for-china-travel#esim-plan-picker",
    },
    secondary: { label: "Internet hub", href: "/internet-in-china" },
    lead: {
      eyebrow: "Landing in under two weeks?",
      title: "Compare eSIM plans first",
      hint: "Skip the airport queue only if you don't need a +86 number for SMS.",
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
    primary: {
      label: "Compare exact eSIM plans",
      href: "/best-esim-for-china-travel#esim-plan-picker",
    },
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
