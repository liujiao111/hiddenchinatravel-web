export type NavId =
  | "guides"
  | "tools"
  | "survivalKit"
  | "services"
  | "contact"
  | "about"
  | "planner"
  | "visaChecker"
  | "currencyConverter"
  | "hubVisa"
  | "hubPayments"
  | "hubInternet"
  | "hubNavigation"
  | "hubTransport"
  | "hubFood"
  | "hubHotels"
  | "hubTickets"
  | "hubEssentials";

export type NavItem = {
  id: NavId;
  href: string;
  children?: NavItem[];
  /** Optional leading icon (emoji) for hub rows */
  icon?: string;
};

/** Core topic hubs — shared by Survival Guides nav + footer Guides column */
export const guidesNav: NavItem[] = [
  { id: "hubVisa", href: "/china-visa-checker", icon: "🛂" },
  { id: "hubPayments", href: "/payments-in-china", icon: "💰" },
  { id: "hubInternet", href: "/internet-in-china", icon: "🌐" },
  { id: "hubNavigation", href: "/maps-navigation-in-china", icon: "📍" },
  { id: "hubTransport", href: "/transport-in-china", icon: "🚇" },
  { id: "hubFood", href: "/food-delivery-in-china", icon: "🍜" },
  { id: "hubHotels", href: "/hotels-in-china", icon: "🏨" },
  { id: "hubTickets", href: "/attraction-tickets-in-china", icon: "🎫" },
  { id: "hubEssentials", href: "/china-travel-essentials", icon: "🧳" },
];

export const toolsNav: NavItem[] = [
  {
    id: "planner",
    href: "/china-itinerary-planner",
  },
  {
    id: "visaChecker",
    href: "/china-visa-checker",
  },
  {
    id: "currencyConverter",
    href: "/china-currency-converter",
  },
];

export const mainNav: NavItem[] = [
  { id: "services", href: "/services" },
  { id: "survivalKit", href: "/survival-kit" },
  { id: "guides", href: "/survival-guides", children: guidesNav },
  { id: "tools", href: "/tools", children: toolsNav },
  { id: "contact", href: "/contact" },
  { id: "about", href: "/about" },
];
