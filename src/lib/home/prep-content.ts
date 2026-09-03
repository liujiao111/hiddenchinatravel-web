/**
 * Homepage prep module — mirrors Survival Kit six steps in a compact form.
 * Dual purchase choices use hover/focus buy menus (not stacked lists).
 */

export type PrepBuyOption = {
  label: string;
  href: string;
  external?: boolean;
  hint?: string;
};

export type PrepBuyMenu = {
  buttonLabel: string;
  options: PrepBuyOption[];
  chooseHint: string;
  guide: { label: string; href: string };
  /**
   * Shown as a one-click primary CTA above the compare menu
   * (reduces friction for the recommended partner).
   */
  featured?: PrepBuyOption;
};

export type HomePrepStep =
  | {
      id: "visa";
      step: 1;
      title: string;
      body: string;
      kind: "visa";
    }
  | {
      id: "network" | "payments" | "booking";
      step: number;
      title: string;
      body: string;
      kind: "buy-menus";
      menus: PrepBuyMenu[];
    }
  | {
      id: "maps";
      step: 4;
      title: string;
      body: string;
      kind: "simple";
      cta: { label: string; href: string };
      guide: { label: string; href: string };
    }
  | {
      id: "insurance";
      step: 6;
      title: string;
      body: string;
      kind: "simple";
      cta: { label: string; href: string };
      guide: { label: string; href: string };
    };

export const homePrepSection = {
  eyebrow: "Included with planning",
  title: "Survival prep that comes with a custom itinerary",
  intro:
    "Visa, network, payments, maps, bookings, and insurance — the Survival Kit checklist included with partner planning, and free to use on its own.",
  kitCta: {
    label: "View the full Survival Kit for China",
    href: "/survival-kit",
  },
} as const;

export const homePrepSteps: HomePrepStep[] = [
  {
    id: "visa",
    step: 1,
    kind: "visa",
    title: "Check your visa path",
    body: "Select your passport country for a quick visa-free signal — then open the full checker for stay length and transit rules.",
  },
  {
    id: "network",
    step: 2,
    kind: "buy-menus",
    title: "Get online before you land",
    body: "eSIM for mobile data on landing. Add a VPN only if you will use hotel Wi-Fi or a local SIM.",
    menus: [
      {
        buttonLabel: "Compare exact plans & prices",
        chooseHint:
          "Trip.com's SKUs are usually cheaper than Airalo's for the same days and data — see exact prices before picking. Some links are affiliate.",
        guide: {
          label: "eSIM guide",
          href: "/best-esim-for-china-travel",
        },
        featured: {
          label: "Compare eSIM plans",
          href: "/best-esim-for-china-travel#esim-plan-picker",
          hint: "7-day and 15-day SKUs, current prices",
        },
        options: [
          {
            label: "Trip.com eSIM",
            href: "/go/trip-esim",
            external: true,
            hint: "Usually cheaper",
          },
          {
            label: "Airalo eSIM",
            href: "/go/airalo",
            external: true,
            hint: "Dedicated eSIM app",
          },
        ],
      },
      {
        buttonLabel: "Compare other VPNs",
        chooseHint:
          "NordVPN is what I use in China (slow connects on some hotel Wi-Fi). ExpressVPN is simpler — I have not used it as my daily China VPN. Some links are affiliate.",
        guide: {
          label: "VPN guide",
          href: "/best-vpn-for-china",
        },
        featured: {
          label: "Try NordVPN",
          href: "/go/nordvpn",
          external: true,
          hint: "What I use",
        },
        options: [
          {
            label: "ExpressVPN",
            href: "/go/expressvpn",
            external: true,
            hint: "Simpler app, not my China daily driver",
          },
        ],
      },
    ],
  },
  {
    id: "payments",
    step: 3,
    kind: "buy-menus",
    title: "Set up payments",
    body: "Finish wallet setup at home — many shops expect a QR code, not a foreign card alone.",
    menus: [
      {
        buttonLabel: "Set up a wallet",
        chooseHint:
          "Start with Alipay for most foreign visitors; add WeChat Pay as a backup.",
        guide: {
          label: "Payments guide",
          href: "/digital-survival-china-payment-guide",
        },
        options: [
          {
            label: "Alipay setup",
            href: "/alipay-for-foreigners-china",
            hint: "Recommended first",
          },
          {
            label: "WeChat Pay setup",
            href: "/wechat-pay-for-foreigners-china",
            hint: "Useful backup",
          },
        ],
      },
    ],
  },
  {
    id: "maps",
    step: 4,
    kind: "simple",
    title: "Install maps that work",
    body: "Google Maps is unreliable on the mainland — learn Amap before you need an address in Chinese.",
    cta: {
      label: "How to use Amap",
      href: "/google-maps-china-not-working",
    },
    guide: {
      label: "Maps hub",
      href: "/maps-navigation-in-china",
    },
  },
  {
    id: "booking",
    step: 5,
    kind: "buy-menus",
    title: "Book flights, hotels & tickets",
    body: "Use Trip.com in English with a foreign card for the pieces that hurt when left late.",
    menus: [
      {
        buttonLabel: "More Trip.com options",
        chooseHint:
          "Lock night-one hotels early; reserve popular sights with the passport you will travel on. Trip.com links are affiliate.",
        guide: {
          label: "Hotel guide",
          href: "/hotels-in-china-for-foreigners",
        },
        featured: {
          label: "Book hotels on Trip.com",
          href: "/go/trip-hotels",
          external: true,
          hint: "Night one",
        },
        options: [
          {
            label: "Flights",
            href: "/go/trip-flight",
            external: true,
          },
          {
            label: "Attraction tickets",
            href: "/go/trip-tickets",
            external: true,
          },
        ],
      },
    ],
  },
  {
    id: "insurance",
    step: 6,
    kind: "simple",
    title: "Cover medical surprises",
    body: "Hospitals often expect payment first. Buy travel medical cover (with evacuation) from a provider you trust before you fly — we don't sell policies.",
    cta: {
      label: "Emergency numbers & tips",
      href: "/survival-kit#section-practical",
    },
    guide: {
      label: "Insurance in the Survival Kit",
      href: "/survival-kit#section-insurance",
    },
  },
];
