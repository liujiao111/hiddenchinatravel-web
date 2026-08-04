import type {
  KitChecklistItem,
  KitPracticalSectionData,
  KitPrepSectionData,
  KitQuickNavItem,
  KitTestimonial,
} from "./types";

/** Pretty affiliate short links — keep in sync with /go/[slug] CSV. */
const go = {
  airalo: "/go/airalo",
  tripEsim: "/go/trip-esim",
  nordvpn: "/go/nordvpn",
  expressvpn: "/go/expressvpn",
  tripHotels: "/go/trip-hotels",
  tripTrains: "/go/trip-trains",
  tripTickets: "/go/trip-tickets",
  tripFlight: "/go/trip-flight",
  tripHome: "/go/trip-home",
} as const;

export const kitPageMeta = {
  title: "China Trip Prep Checklist 2026: Visa, eSIM, Payments & Booking",
  description:
    "One-stop checklist to prepare your China trip: visa path, eSIM and VPN, Alipay, maps, Trip.com bookings, and insurance.",
};

export const kitHero = {
  eyebrow: "China trip prep checklist",
  title: "One checklist to prepare your China trip",
  subtitle:
    "Seven calm steps — visa, network, payments, maps, bookings, insurance, and practical basics — so arrival day is ready, not chaotic.",
  painPoints: [
    "Google, Instagram & WhatsApp often fail on mainland connections",
    "Most everyday payments expect Alipay or WeChat Pay — not cash",
    "Uber and Google Maps are unreliable for real on-the-ground travel",
  ],
};

export const kitQuickNav: KitQuickNavItem[] = [
  { id: "section-visa", label: "Visa" },
  { id: "section-network", label: "Network" },
  { id: "section-payment", label: "Payments" },
  { id: "section-maps", label: "Maps" },
  { id: "section-booking", label: "Booking" },
  { id: "section-insurance", label: "Insurance" },
  { id: "section-practical", label: "Practical" },
];

/** Step 1 · Visa */
export const kitVisaPrepSection: KitPrepSectionData = {
  id: "section-visa",
  eyebrow: "Step 1 · Visa",
  title: "Check whether you need a China visa",
  intro:
    "Confirm your entry path first. If you qualify for visa-free travel, you can skip the rest of this step. If not, check the rules before you book non-refundable tickets.",
  cards: [
    {
      icon: "visa",
      title: "Likely visa-free?",
      anxiety:
        "Many passports now qualify for short visa-free stays — but assuming it without checking is a common day-one failure.",
      options: [
        {
          name: "Confirm with the visa checker",
          diff: "If you are visa-free, you can skip this step and move on to Network.",
          primaryCta: {
            label: "Check my visa path",
            href: "/china-visa-checker",
            trackingModule: "visa-free",
          },
          secondaryCta: {
            label: "Visa-free countries list",
            href: "/china-visa-free-countries-2026",
            trackingModule: "visa-free",
          },
        },
      ],
    },
    {
      icon: "guide",
      title: "Need a tourist visa?",
      anxiety:
        "Wrong assumptions about visas waste weeks. Check the tool and guides before you apply or book flights.",
      options: [
        {
          name: "See application rules",
          diff: "Use the checker for your passport, then read the practical visa guide.",
          primaryCta: {
            label: "Open visa checker",
            href: "/china-visa-checker",
            trackingModule: "visa-need",
          },
          secondaryCta: {
            label: "Do I need a visa?",
            href: "/do-i-need-a-visa-for-china",
            trackingModule: "visa-need",
          },
        },
      ],
      footerGuide: {
        label: "Full visa & entry hub",
        href: "/do-i-need-a-visa-for-china",
        trackingModule: "visa-need",
      },
    },
  ],
};

/** Step 2 · Network */
export const kitNetworkSection: KitPrepSectionData = {
  id: "section-network",
  eyebrow: "Step 2 · Network",
  title: "Get online before you land",
  intro:
    "Without working data and a backup for blocked apps, maps, messages, and payments stall on day one. Set this up at home — not on airport Wi-Fi.",
  cards: [
    {
      icon: "esim",
      title: "China travel eSIM",
      anxiety:
        "Roaming is expensive and often unreliable. Without local data, you cannot open maps, translate signs, or finish Alipay setup when you need them most.",
      options: [
        {
          name: "Airalo",
          diff: "eSIM specialist — quick app install if you only need data.",
          logoSrc: "/assets/survival-kit/apps/airalo.svg",
          primaryCta: {
            label: "Get Airalo eSIM",
            href: go.airalo,
            external: true,
            trackingModule: "network-esim-airalo",
          },
          secondaryCta: {
            label: "eSIM guide",
            href: "/best-esim-for-china-travel",
            trackingModule: "network-esim-airalo",
          },
        },
        {
          name: "Trip.com eSIM",
          diff: "Same account as hotels and flights — handy if you already book on Trip.",
          logoSrc: "/assets/survival-kit/apps/trip.svg",
          primaryCta: {
            label: "Get Trip.com eSIM",
            href: go.tripEsim,
            external: true,
            trackingModule: "network-esim-trip",
          },
          secondaryCta: {
            label: "eSIM guide",
            href: "/best-esim-for-china-travel",
            trackingModule: "network-esim-trip",
          },
        },
      ],
      footerGuide: {
        label: "Full internet setup guide",
        href: "/digital-survival-china-internet-guide",
        trackingModule: "network-esim",
      },
    },
    {
      icon: "vpn",
      title: "Travel VPN",
      anxiety:
        "Hotel and cafe Wi-Fi often block Google, Instagram, WhatsApp, and banking apps. Install and test a VPN before departure — after you land is usually too late.",
      options: [
        {
          name: "NordVPN",
          diff: "Our usual pick for travel — solid for phones and laptops.",
          logoSrc: "/assets/survival-kit/apps/nordvpn.svg",
          primaryCta: {
            label: "Get NordVPN",
            href: go.nordvpn,
            external: true,
            trackingModule: "network-vpn-nord",
          },
          secondaryCta: {
            label: "Do I need a VPN?",
            href: "/do-you-need-vpn-china",
            trackingModule: "network-vpn-nord",
          },
        },
        {
          name: "ExpressVPN",
          diff: "Strong alternative if you prefer another brand’s app and pricing.",
          logoSrc: "/assets/survival-kit/apps/expressvpn.svg",
          primaryCta: {
            label: "Get ExpressVPN",
            href: go.expressvpn,
            external: true,
            trackingModule: "network-vpn-express",
          },
          secondaryCta: {
            label: "Do I need a VPN?",
            href: "/do-you-need-vpn-china",
            trackingModule: "network-vpn-express",
          },
        },
      ],
      footerGuide: {
        label: "Best VPN for China comparison",
        href: "/best-vpn-for-china",
        trackingModule: "network-vpn",
      },
    },
  ],
};

/** Step 3 · Payments */
export const kitPaymentSection: KitPrepSectionData = {
  id: "section-payment",
  eyebrow: "Step 3 · Payments",
  title: "Set up payments before you arrive",
  intro:
    "Many shops, metros, and small vendors expect a QR code wallet. Finish linking and verification at home — not while holding a bottle of water at the airport.",
  cards: [
    {
      icon: "alipay",
      title: "Mobile wallets",
      anxiety:
        "Foreign cards alone often fail at everyday checkout. Without Alipay or WeChat Pay ready, simple purchases turn into awkward refusals.",
      options: [
        {
          name: "Alipay",
          badge: "Recommended",
          diff: "Usually the easiest first wallet for foreign visitors.",
          logoSrc: "/assets/survival-kit/apps/alipay.webp",
          primaryCta: {
            label: "Set up Alipay",
            href: "/alipay-for-foreigners-china",
            trackingModule: "payment-alipay",
          },
          secondaryCta: {
            label: "Payments guide",
            href: "/digital-survival-china-payment-guide",
            trackingModule: "payment-alipay",
          },
        },
        {
          name: "WeChat Pay",
          badge: "Backup",
          diff: "Useful second wallet when a merchant only accepts WeChat.",
          logoSrc: "/assets/survival-kit/apps/wechat-pay.webp",
          primaryCta: {
            label: "Set up WeChat Pay",
            href: "/wechat-pay-for-foreigners-china",
            trackingModule: "payment-wechat",
          },
          secondaryCta: {
            label: "Payments hub",
            href: "/payments-in-china",
            trackingModule: "payment-wechat",
          },
        },
      ],
    },
  ],
};

/** Step 4 · Maps */
export const kitMapsSection: KitPrepSectionData = {
  id: "section-maps",
  eyebrow: "Step 4 · Maps",
  title: "Install maps that work in China",
  intro:
    "Google Maps is unreliable for mainland streets. Install a local map app before you need an address in Chinese.",
  cards: [
    {
      icon: "map",
      title: "Amap (Gaode Maps)",
      anxiety:
        "Wrong pins and missing local listings leave you stranded at exits and hotel doors. Download Amap and learn the basics before you land.",
      options: [
        {
          name: "Amap setup",
          diff: "Best everyday navigation for metros, walking, and taxis in China.",
          logoSrc: "/assets/survival-kit/apps/amap.svg",
          primaryCta: {
            label: "How to use Amap",
            href: "/google-maps-china-not-working",
            trackingModule: "maps-amap",
          },
          secondaryCta: {
            label: "Maps hub",
            href: "/maps-navigation-in-china",
            trackingModule: "maps-amap",
          },
        },
      ],
    },
  ],
};

/** Step 5 · Booking */
export const kitBookingSection: KitPrepSectionData = {
  id: "section-booking",
  eyebrow: "Step 5 · Booking",
  title: "Book flights, hotels, and tickets",
  intro:
    "Trip.com handles English booking and foreign cards for the pieces that hurt most when left late — flights in, night-one hotels, trains between cities, and popular sights.",
  cards: [
    {
      icon: "ticket",
      title: "Book on Trip.com",
      anxiety:
        "Last-minute hotel and ticket stress is common — especially when a listing rejects foreign passports or sells out.",
      options: [
        {
          name: "Flights",
          diff: "Search international routes in English and pay with a foreign card.",
          logoSrc: "/assets/survival-kit/apps/trip.svg",
          primaryCta: {
            label: "Search flights",
            href: go.tripFlight,
            external: true,
            trackingModule: "booking-flights",
          },
          secondaryCta: {
            label: "Transport guide",
            href: "/digital-survival-china-transport-guide",
            trackingModule: "booking-flights",
          },
        },
        {
          name: "Hotels",
          diff: "Book places that handle passport check-in without day-one drama.",
          logoSrc: "/assets/survival-kit/apps/trip.svg",
          primaryCta: {
            label: "Search hotels",
            href: go.tripHotels,
            external: true,
            trackingModule: "booking-hotels",
          },
          secondaryCta: {
            label: "Hotel guide",
            href: "/hotels-in-china-for-foreigners",
            trackingModule: "booking-hotels",
          },
        },
        {
          name: "High-speed rail",
          diff: "Book intercity trains with your passport — English UI, no Chinese phone required.",
          logoSrc: "/assets/survival-kit/apps/trip.svg",
          primaryCta: {
            label: "Book trains",
            href: go.tripTrains,
            external: true,
            trackingModule: "booking-trains",
          },
          secondaryCta: {
            label: "Train booking guide",
            href: "/book-china-high-speed-rail-foreigners",
            trackingModule: "booking-trains",
          },
        },
        {
          name: "Attraction tickets",
          diff: "Reserve popular sights early with the passport you will travel on.",
          logoSrc: "/assets/survival-kit/apps/trip.svg",
          primaryCta: {
            label: "Book tickets",
            href: go.tripTickets,
            external: true,
            trackingModule: "booking-tickets",
          },
          secondaryCta: {
            label: "Ticket guide",
            href: "/china-attraction-ticket-booking-foreigners-2026",
            trackingModule: "booking-tickets",
          },
        },
      ],
      footerGuide: {
        label: "Open Trip.com home",
        href: go.tripHome,
        external: true,
        trackingModule: "booking-home",
      },
    },
  ],
};

/** Step 6 · Insurance */
export const kitInsuranceSection: KitPrepSectionData = {
  id: "section-insurance",
  eyebrow: "Step 6 · Insurance",
  title: "Cover medical and trip surprises",
  intro:
    "Hospitals often expect payment first. Travel insurance is not required at the border, but it reduces the cost of a bad day.",
  cards: [
    {
      icon: "insurance",
      title: "Travel insurance",
      anxiety:
        "Without cover, an emergency can mean large upfront bills and messy claims from abroad.",
      options: [
        {
          name: "What to buy before you fly",
          diff: "Look for inpatient medical cover that includes evacuation. We don't sell policies — use a provider you already trust at home.",
          primaryCta: {
            label: "Emergency numbers & tips",
            href: "/survival-kit#section-practical",
            trackingModule: "insurance-practical",
          },
          secondaryCta: {
            label: "Why travelers buy cover",
            href: "/china-visa-free-countries-2026",
            trackingModule: "insurance-guide",
          },
        },
      ],
    },
  ],
};

/** Practical reference (not a prep “buy” step) */
export const kitPracticalSection: KitPracticalSectionData = {
  id: "section-practical",
  eyebrow: "Reference · Everyday China",
  title: "Useful practical information",
  intro:
    "Quick facts first-time visitors ask about — emergency numbers, embassies, cash, tipping, and a few cultural don’ts. Save this section offline if you can.",
  emergencyTitle: "Emergency numbers (mainland China)",
  emergencyNote:
    "China does not use a single nationwide 911. Dial the service you need. These lines are free; English may be limited — hotel staff can help if you are stuck.",
  emergencies: [
    {
      service: "Police",
      number: "110",
      chinese: "报警 / 警察",
      when: "Crime, theft, lost passport report, personal safety",
    },
    {
      service: "Fire & rescue",
      number: "119",
      chinese: "火警",
      when: "Fire, smoke, gas leak, rescue situations",
    },
    {
      service: "Ambulance",
      number: "120",
      chinese: "急救",
      when: "Medical emergency, injury, sudden illness",
    },
    {
      service: "Traffic accident",
      number: "122",
      chinese: "交通事故",
      when: "Road accidents; also call 120 if anyone is hurt",
    },
  ],
  factsTitle: "Everyday questions",
  facts: [
    {
      topic: "Embassy / consulate",
      answer:
        "Before you fly, save your country’s embassy or consulate emergency number in China (usually Beijing plus regional consulates). Hotel front desks can often help you call. If your passport is lost, file a police report (110) first, then contact your embassy.",
      linkLabel: "List of embassies in China (Wikipedia)",
      linkHref: "https://en.wikipedia.org/wiki/List_of_diplomatic_missions_in_China",
    },
    {
      topic: "Is China cashless?",
      answer:
        "In cities it often feels cashless — Alipay and WeChat Pay are the default. Foreign cards alone still fail in many places. Keep a small cash backup (about ¥50–100) for tiny vendors, temples, or rural spots.",
      linkLabel: "Payments setup guide",
      linkHref: "/digital-survival-china-payment-guide",
    },
    {
      topic: "Tipping culture",
      answer:
        "Everyday restaurants, taxis, and delivery do not expect tips. Service is usually included. Exceptions are rare: some high-end hotels, private guides, or international venues may accept a tip — never required in casual dining.",
    },
    {
      topic: "Cultural don’ts (quick)",
      answer:
        "Don’t stick chopsticks upright in a rice bowl. Avoid loud political arguments in public. Ask before photographing people, temples’ restricted areas, or security/military sites. Queue politely; pointing soles at people or gods in temples is rude.",
    },
  ],
};

export const kitChecklistItems: KitChecklistItem[] = [
  { id: "visa", label: "Visa / visa-free path confirmed" },
  { id: "data", label: "Mobile data / eSIM installed and ready to activate" },
  { id: "vpn", label: "VPN installed and tested once before departure" },
  { id: "pay", label: "Alipay (and ideally WeChat Pay) linked and verified" },
  { id: "maps", label: "Amap installed and basic search tested" },
  { id: "hotel", label: "Flight + night-one hotel booked" },
  { id: "tickets", label: "Key attraction tickets reserved (if needed)" },
  { id: "insurance", label: "Travel insurance arranged" },
];

export const kitTestimonials: KitTestimonial[] = [
  {
    quote:
      "I set up Alipay and an eSIM the week before — first metro ride in Shanghai felt normal instead of stressful.",
    name: "Emma R.",
    meta: "First trip · 10 days",
  },
  {
    quote:
      "The VPN tip for hotel Wi-Fi alone was worth it. I would have been stuck refreshing Google Maps otherwise.",
    name: "Jonas K.",
    meta: "Business + weekend travel",
  },
  {
    quote:
      "Checklist format is what I needed. Not another long article — just what to finish before the flight.",
    name: "Priya S.",
    meta: "Independent traveler",
  },
];

export const kitStickyCta = {
  label: "Plan my China trip",
  href: "/china-itinerary-planner",
  trackingModule: "sticky",
};

export const kitPlannerBand = {
  title: "Prep checked? Sketch your route",
  body: "Turn cities and days into a simple itinerary once the essentials are ready.",
  ctaLabel: "Plan my China trip",
  href: "/china-itinerary-planner",
  trackingModule: "visa-planner-band",
};
