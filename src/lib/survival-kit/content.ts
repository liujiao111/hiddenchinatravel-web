import type {
  KitChecklistItem,
  KitPracticalSectionData,
  KitPrepSectionData,
  KitQuickNavItem,
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
  title: "What to set up before you fly to China",
  subtitle:
    "Six things worth sorting out at home — visa path, mobile data, a QR wallet, Amap, bookings, insurance — plus the emergency numbers and everyday rules worth saving offline.",
  image: {
    src: "/assets/blog/independent-travel-china/cover.webp",
    alt: "Travellers crossing the concourse at Chengdu East Railway Station at dusk",
  },
  primaryCta: { label: "Start with the visa step", href: "#section-visa" },
  secondaryCta: { label: "Jump to the checklist", href: "#section-checklist" },
};

/** Three things that break on arrival if nothing was prepared. */
export const kitDayOne = {
  title: "Why this is worth doing before you board",
  items: [
    {
      title: "Your usual apps stop loading",
      body: "Google, Gmail, Instagram and WhatsApp do not work on a normal mainland connection. A VPN has to be installed and signed into before you get there.",
    },
    {
      title: "Checkout assumes a QR wallet",
      body: "Cash is still legal and small vendors will take it — you will just be the only person paying that way. Alipay or WeChat Pay is the default everywhere else.",
    },
    {
      title: "Google Maps points at the wrong door",
      body: "Mainland pins sit offset from the real entrance and listings go stale. Uber does not operate here either; Amap is what drivers and locals use.",
    },
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
  step: "01",
  eyebrow: "Visa",
  title: "Check whether you need a China visa",
  intro:
    "Confirm your entry path first. If you qualify for visa-free travel, you can skip the rest of this step. If not, check the rules before you book non-refundable tickets.",
  cards: [
    {
      title: "Likely visa-free?",
      note: "The visa-free list has been expanded several times since 2024, and it follows the passport you travel on rather than where you live.",
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
      title: "Need a tourist visa?",
      note: "Apply before you buy non-refundable flights. Processing times are set by the visa centre handling your application, so they vary by country.",
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
  step: "02",
  eyebrow: "Network",
  title: "Get online before you land",
  intro:
    "Airport and hotel Wi-Fi usually wants an SMS code sent to a Chinese number, which you will not have yet. Buy the data plan and install the VPN while you still have your home connection.",
  cards: [
    {
      title: "China travel eSIM",
      note: "A travel eSIM gives you data the minute you land, but not a Chinese phone number — so Wi-Fi logins, bike sharing and delivery apps that need a Chinese SMS code still will not work.",
      options: [
        {
          name: "Trip.com eSIM",
          diff: "Usually cheaper than Airalo for the same days and data — same account as hotels and flights if you already book on Trip.",
          logoSrc: "/assets/survival-kit/apps/trip.svg",
          primaryCta: {
            label: "Get Trip.com eSIM",
            href: go.tripEsim,
            external: true,
            trackingModule: "network-esim-trip",
          },
          secondaryCta: {
            label: "Compare exact plans",
            href: "/best-esim-for-china-travel#esim-plan-picker",
            trackingModule: "network-esim-trip",
          },
        },
        {
          name: "Airalo",
          diff: "Dedicated eSIM app and top-ups — costs more, but a simpler fit if you already use it.",
          logoSrc: "/assets/survival-kit/apps/airalo.svg",
          primaryCta: {
            label: "Get Airalo eSIM",
            href: go.airalo,
            external: true,
            trackingModule: "network-esim-airalo",
          },
          secondaryCta: {
            label: "Compare exact plans",
            href: "/best-esim-for-china-travel#esim-plan-picker",
            trackingModule: "network-esim-airalo",
          },
        },
      ],
      footerGuide: {
        label: "Compare exact eSIM plans & prices",
        href: "/best-esim-for-china-travel#esim-plan-picker",
        trackingModule: "network-esim",
      },
    },
    {
      title: "Travel VPN",
      note: "Install it, sign in, and run it once while you are still at home. Downloading a VPN after you are already on a mainland connection is the step that fails.",
      options: [
        {
          name: "NordVPN",
          diff: "What I use in China — works, but hotel Wi-Fi can take a long time to connect.",
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
          diff: "Simpler app. I have not used it as my daily China VPN — backup if Nord stalls.",
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
  step: "03",
  eyebrow: "Payments",
  title: "Set up payments before you arrive",
  intro:
    "Linking a card and clearing passport verification both take a few minutes, and sometimes a second attempt. Do it at home, where a failed step costs you nothing.",
  cards: [
    {
      title: "Mobile wallets",
      note: "Verification runs off your passport, so have it with you. A linked foreign card pays no fee under ¥200 per transaction and 3% above that — worth knowing before you split a dinner bill.",
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
  step: "04",
  eyebrow: "Maps",
  title: "Install maps that work in China",
  intro:
    "Amap covers metro exits, walking routes and taxi pickup points that Google Maps either misses or places on the wrong side of the street. It is the one app worth installing even for a short trip.",
  cards: [
    {
      title: "Amap (Gaode Maps)",
      note: "Amap has an English option, but it sits under Me → Settings → General → Language and only applies after you restart the app. Set it before you land.",
      options: [
        {
          name: "Amap setup",
          diff: "Search in English for landmarks and stations; paste the Chinese address for anything smaller.",
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
  step: "05",
  eyebrow: "Booking",
  title: "Book flights, hotels, and tickets",
  intro:
    "Book the pieces that are hard to fix once you are on the ground: the flight in, the first night's hotel, intercity trains, and any sight that caps daily visitors.",
  cards: [
    {
      title: "Book on Trip.com",
      note: "One account takes a passport and a foreign card in English. Trains are where it matters most: 12306 sells the same seats, but foreign passport holders have to clear identity verification there first.",
      options: [
        {
          name: "Flights",
          diff: "Search international routes in English and pay with a foreign card.",
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
          diff: "Filter for places that accept foreign passports before you pay, not at check-in.",
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
          diff: "Same inventory as 12306, with a small service fee and no identity verification step.",
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
          diff: "Reserve capped sights early, using the passport you will travel on.",
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
  step: "06",
  eyebrow: "Insurance",
  title: "Cover medical and trip surprises",
  intro:
    "Travel insurance is not required to enter China. It is worth having anyway, because a hospital here will usually take payment up front and leave you to claim it back later.",
  cards: [
    {
      title: "Travel insurance",
      note: "Look for inpatient medical cover that includes evacuation, and check that it is valid for the full length of your stay.",
      options: [
        {
          name: "We do not sell policies",
          diff: "There is no affiliate link in this step and no commission behind it. Use a provider you already trust at home, or whoever your bank or card already works with.",
          secondaryCta: {
            label: "Is China safe for independent travel?",
            href: "/independent-travel-china",
            trackingModule: "insurance-safety",
          },
        },
      ],
      footerGuide: {
        label: "Emergency numbers and embassy contacts",
        href: "#section-practical",
        trackingModule: "insurance-practical",
      },
    },
  ],
};

/** Practical reference (not a prep “buy” step) */
export const kitPracticalSection: KitPracticalSectionData = {
  id: "section-practical",
  step: "07",
  eyebrow: "Everyday China",
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
  { id: "vpn", label: "VPN if hotel Wi-Fi or a local SIM — installed and tested at home" },
  { id: "pay", label: "Alipay (and ideally WeChat Pay) linked and verified" },
  { id: "maps", label: "Amap installed and basic search tested" },
  { id: "hotel", label: "Flight + night-one hotel booked" },
  { id: "tickets", label: "Key attraction tickets reserved (if needed)" },
  { id: "insurance", label: "Travel insurance arranged" },
];

export const kitStickyCta = {
  label: "Plan my China trip",
  href: "/china-itinerary-planner",
  trackingModule: "sticky",
};

export const kitPlannerBand = {
  title: "Still deciding which cities, and how many days?",
  body: "That is the part a checklist cannot answer. We build a one-to-one route as a PDF — fee-only, with no hotel, attraction, or OTA commission behind the recommendations.",
  ctaLabel: "Plan my China trip",
  href: "/china-itinerary-planner",
  trackingModule: "visa-planner-band",
};
