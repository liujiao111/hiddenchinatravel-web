export type PrepOffer = {
  id: string;
  title: string;
  description: string;
  guideLabel: string;
  guideHref: string;
  affiliateLabel?: string;
  affiliateHref?: string;
  icon: "esim" | "vpn" | "payments" | "maps" | "tickets" | "flights" | "hotels";
};

export const prepOffers: PrepOffer[] = [
  {
    id: "esim",
    title: "eSIM & mobile data",
    description:
      "Stay connected without swapping SIM cards. Set up before you land so maps and translation work at the airport.",
    guideLabel: "Read setup guide",
    guideHref: "/best-esim-for-china-travel",
    affiliateLabel: "Get eSIM deal",
    affiliateHref: "/go/airalo",
    icon: "esim",
  },
  {
    id: "vpn",
    title: "VPN for China",
    description:
      "Some apps and sites behave differently in China. Install and test your VPN before departure — not at the gate.",
    guideLabel: "Read VPN guide",
    guideHref: "/do-you-need-vpn-china",
    affiliateLabel: "Get VPN",
    affiliateHref: "/go/nordvpn",
    icon: "vpn",
  },
  {
    id: "payments",
    title: "Set up payments",
    description:
      "Link a foreign card to Alipay or WeChat Pay before you arrive — many shops and taxis are cashless.",
    guideLabel: "Payment setup guide",
    guideHref: "/payments-in-china",
    affiliateLabel: "Alipay for foreigners",
    affiliateHref: "/alipay-for-foreigners-china",
    icon: "payments",
  },
  {
    id: "maps",
    title: "Maps & navigation",
    description:
      "Google Maps is limited in China. Set up Amap, Apple Maps, or Baidu Maps and save offline pins for your first day.",
    guideLabel: "Navigation guide",
    guideHref: "/maps-navigation-in-china",
    icon: "maps",
  },
  {
    id: "tickets",
    title: "Attraction tickets",
    description:
      "Popular sights often need advance booking. Learn which platforms work for passport holders and how to show tickets at the gate.",
    guideLabel: "How to book attractions",
    guideHref: "/attraction-tickets-in-china",
    affiliateLabel: "Browse tickets",
    affiliateHref: "/go/trip-tickets",
    icon: "tickets",
  },
  {
    id: "flights",
    title: "Book flights",
    description:
      "Compare routes into major hubs and leave buffer time for immigration, transfers, and domestic connections.",
    guideLabel: "Transport tips",
    guideHref: "/transport-in-china",
    affiliateLabel: "Search flights",
    affiliateHref: "/go/trip-flight",
    icon: "flights",
  },
  {
    id: "hotels",
    title: "Book hotels",
    description:
      "Not every property accepts foreign guests. Confirm passport check-in, location near metro, and cancellation rules.",
    guideLabel: "Hotel booking tips",
    guideHref: "/hotels-in-china-for-foreigners",
    affiliateLabel: "Find hotels",
    affiliateHref: "/go/trip-hotels",
    icon: "hotels",
  },
];
