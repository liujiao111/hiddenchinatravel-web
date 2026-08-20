/**
 * About-page link map.
 * Paths follow webiste_info.md. Live tools use current Next routes.
 */

export type AboutLink = {
  label: string;
  href: string;
};

export const aboutTopicHubs: AboutLink[] = [
  { label: "Payments in China", href: "/payments-in-china" },
  { label: "Internet in China", href: "/internet-in-china" },
  { label: "Maps & Navigation in China", href: "/maps-navigation-in-china" },
  { label: "Transport in China", href: "/transport-in-china" },
  { label: "Food Delivery in China", href: "/food-delivery-in-china" },
  { label: "Hotels in China", href: "/hotels-in-china" },
  { label: "Attraction Tickets in China", href: "/attraction-tickets-in-china" },
  { label: "Travel Essentials", href: "/china-travel-essentials" },
  { label: "Itinerary Planning", href: "/china-itinerary-planning" },
  { label: "Visa & Entry", href: "/china-visa-checker" },
];

export const aboutTools: AboutLink[] = [
  { label: "China Visa Checker", href: "/china-visa-checker" },
  { label: "Survival Kit", href: "/survival-kit" },
  { label: "Survival Guides", href: "/survival-guides" },
  { label: "All tools", href: "/tools" },
];

export const aboutStartHereGuides: AboutLink[] = [
  {
    label: "How to Pay in China as a Foreigner",
    href: "/digital-survival-china-payment-guide",
  },
  {
    label: "Alipay for Foreigners in China",
    href: "/alipay-for-foreigners-china",
  },
  {
    label: "WeChat Pay for Foreigners in China",
    href: "/wechat-pay-for-foreigners-china",
  },
  {
    label: "Internet & VPN in China",
    href: "/digital-survival-china-internet-guide",
  },
  {
    label: "China SIM Card for Foreigners",
    href: "/china-sim-card-for-foreigners",
  },
  {
    label: "Why Google Maps Doesn’t Work Properly in China",
    href: "/google-maps-china-not-working",
  },
  {
    label: "Transport in China",
    href: "/digital-survival-china-transport-guide",
  },
  {
    label: "Hotels in China for Foreigners",
    href: "/hotels-in-china-for-foreigners",
  },
  {
    label: "How Foreigners Can Book Attraction Tickets",
    href: "/china-attraction-ticket-booking-foreigners-2026",
  },
  {
    label: "How to Order Food Without a Chinese Number",
    href: "/order-food-china-without-chinese-number",
  },
  {
    label: "China’s Real-Name System for Foreigners",
    href: "/china-real-name-system-foreigners",
  },
  {
    label: "Independent Travel in China",
    href: "/independent-travel-china",
  },
  {
    label: "How to Plan a China Itinerary Independently",
    href: "/how-to-plan-china-itinerary",
  },
];

export const aboutSeries = {
  access: {
    title: "Access",
    description: "Mobile payments, SIM cards, eSIMs, and internet access.",
    links: [
      { label: "Payments in China Hub", href: "/payments-in-china" },
      { label: "Internet in China Hub", href: "/internet-in-china" },
      {
        label: "How to Pay in China as a Foreigner",
        href: "/digital-survival-china-payment-guide",
      },
      {
        label: "China SIM Card for Foreigners",
        href: "/china-sim-card-for-foreigners",
      },
    ],
  },
  mobility: {
    title: "Mobility",
    description: "Transport, train booking, maps, and navigation tools.",
    links: [
      { label: "Transport in China Hub", href: "/transport-in-china" },
      {
        label: "Maps & Navigation in China Hub",
        href: "/maps-navigation-in-china",
      },
      {
        label: "Transport Guide",
        href: "/digital-survival-china-transport-guide",
      },
      {
        label: "Google Maps in China",
        href: "/google-maps-china-not-working",
      },
    ],
  },
  daily: {
    title: "Daily Logistics",
    description: "Hotels, food delivery, bookings, and everyday travel tools.",
    links: [
      { label: "Hotels in China Hub", href: "/hotels-in-china" },
      { label: "Food Delivery in China Hub", href: "/food-delivery-in-china" },
      {
        label: "Attraction Tickets Hub",
        href: "/attraction-tickets-in-china",
      },
      {
        label: "Hotels for Foreigners",
        href: "/hotels-in-china-for-foreigners",
      },
    ],
  },
  system: {
    title: "System Logic",
    description:
      "Real-name verification, passport-based access, and why certain restrictions exist.",
    links: [
      {
        label: "China’s Real-Name System Explained",
        href: "/china-real-name-system-foreigners",
      },
      { label: "Visa Checker tool", href: "/china-visa-checker" },
      {
        label: "Do I Need a Visa for China?",
        href: "/do-i-need-a-visa-for-china",
      },
    ],
  },
  independent: {
    title: "Independent Travel",
    description:
      "Practical guidance for travelers navigating China without packaged tours.",
    links: [
      {
        label: "Independent Travel in China",
        href: "/independent-travel-china",
      },
      { label: "Survival Kit", href: "/survival-kit" },
      { label: "Survival Guides", href: "/survival-guides" },
    ],
  },
} as const;

export const aboutFrictionQuestions = [
  "Can foreigners use Alipay or WeChat Pay?",
  "Why does Google Maps not work properly in China?",
  "Do hotels in China accept foreign guests?",
  "Do I need a Chinese phone number or bank account?",
  "How do I book trains, hotels, or attraction tickets with a passport?",
  "What do I do if I lose my passport or get blocked by a verification step?",
];
