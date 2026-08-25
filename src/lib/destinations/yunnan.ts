import type { RegionDestination } from "./types";

const PLANNER = "/china-itinerary-planner?dest=yunnan&shape=loop-7#plan-trip";
const PREP = "/survival-kit";

export const yunnanDestination: RegionDestination = {
  slug: "yunnan",
  name: "Yunnan",
  seoTitle: "Independent Yunnan: 7-Day Kunming–Dali–Lijiang Loop",
  metaDescription:
    "A 7-day independent Kunming–Dali–Lijiang loop: Erhai, Jade Dragon, Shuhe, and a Kunming landing — without a tour bus. Custom PDF from $129 (6–10 day early bird).",
  canonical: "/china-destinations/yunnan",
  h1: "Independent Yunnan: a 7-day Kunming–Dali–Lijiang loop",
  eyebrow: "Southwest China · Spring City",
  lede:
    "Fly into Kunming, take the westbound fast train, and keep the week on one rail spine: Erhai, a Dali walk, Lijiang mornings, Jade Dragon if the sky is clean. Rainforest and the plateau are spare-day add-ons — not this loop.",
  ctaHint:
    "A 7-day Yunnan loop is the 6–10 day planning tier: $129 early bird, not $99. Survival Kit prep is included with the paid PDF.",
  plannerCtaLabel: "Plan this Yunnan loop",
  plannerHref: PLANNER,
  secondaryCtaLabel: "Open the free prep checklist",
  secondaryCtaHref: PREP,
  ogImage: "/brand/destinations/yunnan/hero-erhai.webp",
  offerPrice: 129,
  heroMain: {
    id: "hero-main",
    aspect: "16/9",
    keywords: "Erhai Lake Dali white village shoreline Cangshan Yunnan",
    alt: "White village on Erhai’s shore under mountains, Dali, Yunnan",
    src: "/brand/destinations/yunnan/hero-erhai.webp",
  },
  heroSideA: {
    id: "hero-side-a",
    aspect: "2/3",
    keywords: "Yuanyang rice terraces sunrise red soil Yunnan aerial",
    alt: "Sunrise over red-soil rice terraces in Yuanyang, Yunnan",
  },
  heroSideB: {
    id: "hero-side-b",
    aspect: "2/3",
    keywords: "Xishuangbanna tropical rainforest palm Dai temple Jinghong",
    alt: "Tropical palms and a Dai temple near Jinghong, Xishuangbanna",
  },
  facts: [
    { label: "Loop", value: "Kunming → Dali → Lijiang · 7 days" },
    { label: "Rail", value: "One westbound spine · you buy the tickets" },
    { label: "Landing", value: "Kunming (KMG) · Spring City, not the climax" },
    { label: "Altitude", value: "Kunming ~1,900 m · Lijiang ~2,400 m" },
    { label: "Permit", value: "No Tibet-style permit on this loop" },
    { label: "Planning", value: "$129 early bird · 6–10 day PDF" },
    { label: "Add-on", value: "Shangri-La on-line · Jinghong off-line" },
    { label: "Style", value: "Independent — not a seven-day coach" },
  ],
  nav: [
    { href: "#fit", label: "Fit" },
    { href: "#route", label: "Route" },
    { href: "#highlights", label: "Highlights" },
    { href: "#days", label: "7 days" },
    { href: "#texture", label: "Local" },
    { href: "#budget", label: "Budget" },
    { href: "#trains", label: "Trains" },
    { href: "#addon", label: "10 days" },
    { href: "#places", label: "Places" },
    { href: "#season", label: "Season" },
    { href: "#prepare", label: "Prepare" },
    { href: "#food", label: "Food" },
    { href: "#faq", label: "FAQ" },
  ],
  fit: {
    eyebrow: "Who this loop is for",
    title: "A first independent Yunnan week — not the whole province",
    intro:
      "Seven days is enough if you stay on the Kunming–Dali–Lijiang trains. It is not enough if you treat Yunnan as a checklist of rainforest, gorge, and plateau.",
    yesLabel: "This loop fits",
    noLabel: "Skip this shape if",
    yes: [
      "You have about a week and want trains in your own name",
      "You would rather land in Kunming than start on a coach in Dali",
      "Erhai, a Dali walk, Shuhe mornings, and Jade Dragon are the point",
      "You can leave Shangri-La or Jinghong for spare days — or a later trip",
    ],
    no: [
      "You want Dali, Lijiang, Shangri-La, and Xishuangbanna in seven nights",
      "You need a guide on the bus and a fixed shopping-stop script",
      "You only have five days — that is a different (and shorter) PDF tier",
      "You want the rainforest as a casual day trip from Lijiang",
    ],
  },
  loopMap: {
    eyebrow: "The 7-day spine",
    title: "One rail line west — Kunming, Dali, Lijiang",
    intro:
      "The map is the itinerary. Stay on this line for seven days. Shangri-La continues the same rail north of Lijiang. Jinghong does not — that hop drops you off the spine and costs a backtrack.",
    points: [
      {
        id: "kunming",
        name: "Kunming",
        localName: "昆明",
        lat: 25.0389,
        lng: 102.7183,
        role: "Landing · Day 1",
        onLoop: true,
      },
      {
        id: "dali",
        name: "Dali",
        localName: "大理",
        lat: 25.6913,
        lng: 100.158,
        role: "Erhai · Days 2–3",
        onLoop: true,
      },
      {
        id: "lijiang",
        name: "Lijiang",
        localName: "丽江",
        lat: 26.855,
        lng: 100.227,
        role: "Highlands · Days 4–7",
        onLoop: true,
      },
      {
        id: "shangri-la",
        name: "Shangri-La",
        localName: "香格里拉",
        lat: 27.829,
        lng: 99.706,
        role: "On-line add · 10-day",
        onLoop: false,
      },
      {
        id: "jinghong",
        name: "Jinghong",
        localName: "景洪",
        lat: 22.0057,
        lng: 100.7979,
        role: "Off-line add · 3–4 days",
        onLoop: false,
      },
    ],
  },
  highlights: [
    {
      id: "erhai",
      name: "Erhai",
      localName: "洱海",
      role: "The lake the week is for",
      body: "A slow day on the village side — bike or bus, not a full-lake trophy lap. Save the Three Pagodas for a short paid stop if you want the postcard.",
      photo: {
        id: "highlight-erhai",
        aspect: "16/9",
        keywords: "Erhai lakeside village cangshan reflection",
        alt: "Bai village fields beside Erhai Lake with Cangshan across the water",
        src: "/brand/destinations/yunnan/route-d3.webp",
      },
    },
    {
      id: "jade-dragon",
      name: "Jade Dragon",
      localName: "玉龙雪山",
      role: "Mountain day — if the sky is clean",
      body: "Plan around weather and altitude, not a boxed cable-car + show combo. If the peak is in cloud, spend the day in Shuhe instead.",
      photo: {
        id: "highlight-jade-dragon",
        aspect: "16/9",
        keywords: "Shuhe ancient town quiet stream Jade Dragon",
        alt: "Turquoise Blue Moon Valley below snow peaks of Jade Dragon",
        src: "/brand/destinations/yunnan/route-d6.webp",
      },
    },
    {
      id: "dali-old-town",
      name: "Dali Old Town",
      localName: "大理古城",
      role: "A town you can walk",
      body: "No ticket gate on the old town itself. Stay near it or in a quieter Erhai village. Skip the bar strip if you came for mountains.",
      photo: {
        id: "highlight-dali-old-town",
        aspect: "2/3",
        keywords: "Dali ancient town wall gate mountains",
        alt: "South gate of Dali Old Town with lanterns and flower beds",
        src: "/brand/destinations/yunnan/route-d2.webp",
      },
    },
    {
      id: "shuhe",
      name: "Shuhe",
      localName: "束河",
      role: "Quieter Lijiang nights",
      body: "Sleep here or on a slope village if you want canals without the night-market mall. Dayan is a morning walk, not the hotel belt.",
      photo: {
        id: "highlight-shuhe",
        aspect: "2/3",
        keywords: "Lijiang canal bridges willow old town day",
        alt: "Lijiang Old Town rooftops and pink blossom with Jade Dragon beyond",
        src: "/brand/destinations/yunnan/route-d5.webp",
      },
    },
    {
      id: "kunming-landing",
      name: "Kunming landing",
      localName: "昆明",
      role: "Spring City — one night, then west",
      body: "Green Lake, a bowl of mixian, early night after a long-haul. Do not spend three days unless you like cities. The 四季如春 slogan is this basin, not Lijiang frost.",
      photo: {
        id: "highlight-kunming",
        aspect: "16/9",
        keywords: "Kunming autumn metasequoia cypress lake reflection",
        alt: "Autumn metasequoia lining a lake in Kunming, reflected in still water",
        src: "/brand/destinations/yunnan/city-kunming.webp",
      },
    },
  ],
  texture: {
    eyebrow: "Local texture",
    title: "What the coach script skips",
    intro:
      "The 7-day spine still has corners you sequence yourself: a flower market, a wet market breakfast, a Bai table, an optional Shaxi pause, and the quiet streets after the tour groups leave.",
    notes: [
      {
        id: "dounan",
        name: "Dounan flower market",
        localName: "斗南",
        body: "Kunming’s wholesale flower yards — go early if your landing night has spare hours. It is a working market, not a garden ticket.",
      },
      {
        id: "wet-market",
        name: "Wet market breakfast",
        localName: "菜场",
        body: "A neighborhood 菜场 is where mixian actually happens. Point at toppings. You do not need a translated menu.",
      },
      {
        id: "shaxi",
        name: "Shaxi",
        localName: "沙溪",
        body: "A Tea Horse Road town between Dali and Lijiang. Only if you have a spare night — it is a pause, not a seventh old-town checkbox.",
      },
      {
        id: "bai-food",
        name: "Bai table",
        localName: "白族菜",
        body: "Rushan, clay-pot fish, and Erhai grill smoke. Walk the strip, pick a stall with a line of locals, sit down.",
      },
      {
        id: "quiet-corners",
        name: "Quiet corners",
        body: "Shuhe before 10am, an Erhai village after the bikes leave, a slope lane instead of Dayan’s night market. The week gets better when you drop the souvenir street.",
      },
    ],
  },
  budget: {
    eyebrow: "What a week costs",
    title: "Independent spend — then the PDF if you want it built",
    intro:
      "These are ballpark figures for two people travelling independently on the 7-day spine, mid-range beds, trains in second class. Your flights sit outside this.",
    lines: [
      {
        label: "Fast trains",
        value: "About ¥200–350 pp",
        note: "Kunming–Dali–Lijiang, second class, bought on Trip.com or 12306",
      },
      {
        label: "Beds",
        value: "¥400–800 / night",
        note: "Shuhe or an Erhai village, foreign-passport hotels",
      },
      {
        label: "Food",
        value: "¥80–150 / day pp",
        note: "Mixian and grill; mushroom hotpot is a splurge night",
      },
      {
        label: "Custom PDF",
        value: "$129 early bird",
        note: "6–10 day tier — this 7-day loop is not the $99 (≤5 day) price",
      },
    ],
    planningNote:
      "The $129 is 1-on-1 planning for a 6–10 day independent route, Survival Kit included. Nothing is charged until we confirm scope. Regular 6–10 day pricing is $169 after the early-bird window.",
  },
  trains: {
    eyebrow: "Do not miss the train",
    title: "Kunming Station vs Kunming South",
    intro:
      "昆明站 and 昆明南站 are different stations, about 25–30 km apart. The ticket’s 始发站 is the one that matters. Mix them up and the westbound train leaves without you.",
    stations: [
      {
        id: "kunming-station",
        name: "Kunming Station",
        localName: "昆明站",
        body: "Downtown. Many C-trains to Dali and Lijiang start here. Closer to Green Lake and the old city grid. If your ticket says 昆明 (not 昆明南), this is you.",
      },
      {
        id: "kunming-south",
        name: "Kunming South",
        localName: "昆明南站",
        body: "Chenggong, south-east of the city. Long-distance G-trains and some Dali departures. Metro Line 1. Do not assume the airport bus drops you at the same place as 昆明站.",
      },
    ],
  },
  addons: {
    eyebrow: "If you have 10 days",
    title: "Shangri-La stays on the line. Xishuangbanna does not.",
    intro:
      "Add one extra region, not both. The 7-day loop still ends at Lijiang. A 10-day PDF is the same $129 early-bird tier as this week — the geography changes, the price band does not.",
    items: [
      {
        id: "shangri-la",
        name: "Shangri-La",
        localName: "香格里拉",
        onLine: true,
        badge: "On the rail line",
        body: "Lijiang–Shangri-La is just over an hour by train since 2023. Add one or two plateau nights at ~3,200 m. It is Diqing, not a Lijiang suburb. Pick this if you want thinner air and Songzanlin — not if you already stacked Jinghong.",
      },
      {
        id: "xishuangbanna",
        name: "Xishuangbanna",
        localName: "西双版纳",
        onLine: false,
        badge: "Off-line · 3–4 days + backtrack",
        body: "Jinghong is a separate Kunming fast train (about 3.5 hours) or a flight. It is not a day trip from Lijiang. Budget three to four extra days and a return to the Kunming hub. Do not bolt rainforest onto a tight Dali–Lijiang week.",
      },
    ],
  },
  placeLinks: [
    { id: "erhai", label: "Erhai", href: "#erhai", note: "Lake day" },
    { id: "jade-dragon", label: "Jade Dragon", href: "#jade-dragon", note: "Mountain" },
    {
      id: "dali-old-town",
      label: "Dali Old Town",
      href: "#dali-old-town",
      note: "Walkable",
    },
    { id: "shuhe", label: "Shuhe", href: "#shuhe", note: "Quiet nights" },
    {
      id: "kunming-landing",
      label: "Kunming",
      href: "#kunming-landing",
      note: "Landing",
    },
    {
      id: "shangri-la",
      label: "Shangri-La",
      href: "#shangri-la",
      note: "On-line add",
    },
    {
      id: "xishuangbanna",
      label: "Xishuangbanna",
      href: "#xishuangbanna",
      note: "Off-line add",
    },
  ],
  prepare: {
    eyebrow: "Before you fly",
    title: "How to prepare for Yunnan — independently",
    intro:
      "Skip the seven-day coach: old town, cable car, night show, next city. Independent Yunnan is slower — you buy the Kunming–Dali–Lijiang train, sleep outside the souvenir streets, and add rainforest or plateau only with spare days.",
    tourLabel: "Typical tour loop",
    independentLabel: "Independent Yunnan",
    tourPoints: [
      "A fixed Dali–Lijiang–Shangri-La script, with shopping stops baked into the drive",
      "One hotel belt inside the night-market old town",
      "Jade Dragon and a show sold as the same boxed day",
      "Chinese-only ops desk once you are on the bus",
    ],
    independentPoints: [
      "High-speed rail in your own name — drop a day, skip a show, or stay in Shuhe",
      "Lakeside or village nights after the groups leave the souvenir lanes",
      "Rainforest or plateau as an extra region, not both on a first loop",
      "English PDF + Survival Kit, and a local partner if you want a path — not a guide",
    ],
    steps: [
      {
        id: "visa",
        title: "Confirm the same China visa",
        body: "The usual Yunnan loop is not a special-permit region like Tibet. Check your passport before you lock Kunming flights.",
        href: "/china-visa-checker",
        linkLabel: "Visa checker",
      },
      {
        id: "pay",
        title: "Unlock Alipay — and carry cash",
        body: "City shops take QR. Yuanyang, mountain villages, and some Dai stalls still want notes. Finish wallet setup at home.",
        href: "/alipay-for-foreigners-china",
        linkLabel: "Alipay for foreigners",
      },
      {
        id: "data",
        title: "Land in Kunming already online",
        body: "Install an eSIM before you fly. Google Maps is weak on the mainland; Amap needs data on day one.",
        href: "/best-esim-for-china-travel",
        linkLabel: "eSIM for China",
      },
      {
        id: "maps",
        title: "Save names in Chinese maps",
        body: "Station exits, Erhai villages, and monastery pins live in Amap — not in a Google pin you screenshot at home.",
        href: "/maps-navigation-in-china",
        linkLabel: "Maps that work",
      },
      {
        id: "rail",
        title: "Buy the westbound train yourself",
        body: "Read 昆明 vs 昆明南 on the ticket. Kunming–Dali–Lijiang is fast rail, not a mystery coach. Jinghong is a separate Kunming hop.",
        href: "/transport-in-china",
        linkLabel: "Trains and tickets",
      },
      {
        id: "stay",
        title: "Book beds that take a foreign passport",
        body: "Lock night one in Kunming after a long-haul. In Dali and Lijiang, Shuhe or an Erhai village is quieter than the night-market lanes.",
        href: "/hotels-in-china",
        linkLabel: "Hotels for foreigners",
      },
    ],
    ctaTitle: "Want this 7-day loop built around your dates?",
    ctaBody:
      "A Kunming–Dali–Lijiang week is the 6–10 day planning tier: $129 early bird. We send a PDF you follow independently. Survival Kit prep is included.",
  },
  cities: [
    {
      id: "lijiang",
      name: "Lijiang",
      role: "Naxi highlands",
      pitch: "Jade Dragon on the skyline — and an old town that is magic before 10am.",
      seasonHint: "Comfortable April–October; winter is clear and cold.",
      body: "Come for the mountain, not the souvenir alleys after dark. Sleep in Shuhe or a slope village if you want quiet. Plan Jade Dragon around weather and altitude, then leave the night market to the tour groups.",
      plannerHref: PLANNER,
      photo: {
        id: "city-lijiang",
        aspect: "16/9",
        keywords: "Lijiang old town tiled rooftops night lanterns moon mountains",
        altKeywords: ["Jade Dragon Snow Mountain from Shuhe"],
        alt: "Night rooftops of Lijiang Old Town under a full moon, lanterns glowing toward the mountains",
        src: "/brand/destinations/yunnan/city-lijiang.webp",
      },
    },
    {
      id: "dali",
      name: "Dali",
      role: "Lake basin",
      pitch: "Erhai, Cangshan, and a town you can walk — no ticket queue required.",
      seasonHint: "Best March–May and September–November; summer storms roll off the lake.",
      body: "Stay near the old town or a quieter Erhai village. Bike a morning of the shoreline; skip the bar strip if you came for mountains.",
      plannerHref: PLANNER,
      photo: {
        id: "city-dali",
        aspect: "2/3",
        keywords: "Erhai Lake Cangshan Dali cypress trees in water autumn",
        altKeywords: ["Dali Three Pagodas Chongsheng Temple"],
        alt: "Autumn cypress trees standing in Erhai Lake with hazy Cangshan beyond, Dali",
        src: "/brand/destinations/yunnan/city-dali.webp",
      },
    },
    {
      id: "xishuangbanna",
      name: "Xishuangbanna",
      role: "Tropical south · off-line",
      pitch: "Palms and heat — not on the 7-day rail spine.",
      seasonHint: "Warm year-round; July–August is the muddiest rainforest stretch.",
      body: "Take the Kunming–Jinghong fast train (about 3.5 hours) or fly. Budget three to four extra days and a backtrack. Do not bolt it onto a tight Dali–Lijiang week.",
      plannerHref: "/china-itinerary-planner?dest=yunnan&shape=banna-10#plan-trip",
      photo: {
        id: "city-xishuangbanna",
        aspect: "2/3",
        keywords: "Xishuangbanna Gaozhuang night golden Dai pagoda palms",
        altKeywords: ["Wild Elephant Valley boardwalk rainforest"],
        alt: "Golden Dai pagoda at night with palms and water reflections in Xishuangbanna",
        src: "/brand/destinations/yunnan/city-xishuangbanna.webp",
      },
    },
    {
      id: "kunming",
      name: "Kunming",
      role: "Spring City",
      pitch: "Mixian, mild weather, and the airport that starts almost every Yunnan loop.",
      seasonHint: "Mild most of the year — a landing, not the scenery climax.",
      body: "Use a night here to reset after a long-haul — Green Lake, a bowl of mixian — then take the train west. Check 昆明 vs 昆明南 on the ticket.",
      plannerHref: PLANNER,
      photo: {
        id: "city-kunming",
        aspect: "16/9",
        keywords: "Kunming autumn metasequoia cypress lake reflection",
        altKeywords: ["Kunming Changshui", "Green Lake Park Kunming"],
        alt: "Autumn metasequoia lining a lake in Kunming, reflected in still water",
        src: "/brand/destinations/yunnan/city-kunming.webp",
      },
    },
  ],
  climate: {
    label: "四季如春 · Eternal spring",
    title: "四季如春 — why the Spring City stays mild",
    body:
      "Kunming sits near 25°N at about 1,900 m. Altitude takes the summer heat off; southern latitude keeps winter from freezing in town. That is 春城. The 7-day loop then climbs into frost. Come year-round for the basin — pack a warm layer for the mountain.",
    points: [
      {
        label: "Central plateau",
        body: "Kunming and the Dali basin. Cool summers, usable winters. This is the slogan.",
      },
      {
        label: "Northwest highlands",
        body: "Lijiang (~2,400 m) and Shangri-La (~3,200 m). Clear, cold nights. A warm layer is not optional.",
      },
      {
        label: "Tropical south",
        body: "Xishuangbanna. Hot, wet, rainforest — off this 7-day line. Don’t bolt it on.",
      },
    ],
  },
  seasons: [
    {
      id: "spring",
      name: "Spring",
      months: "Mar–May",
      climate: "Spring City days · flowers in the east",
      body: "The easiest first-timer window. Luoping’s canola peaks in February–March (gone by May). Book Dali and Lijiang beds early around holidays.",
      photo: {
        id: "season-spring",
        aspect: "2/3",
        keywords: "Luoping canola flower fields yellow Yunnan spring",
        altKeywords: ["Kunming camellia blossom"],
        alt: "Yellow canola fields at Luoping with karst peaks at dusk",
        src: "/brand/destinations/yunnan/season-spring.webp",
      },
      cityAnchors: [
        { id: "kunming-landing", label: "Kunming" },
        { id: "dali-old-town", label: "Dali" },
      ],
    },
    {
      id: "summer",
      name: "Summer",
      months: "Jun–Aug",
      climate: "Highland storms · rainforest heat off-line",
      body: "Afternoons often rain on the spine. Lijiang stays cooler than Jinghong. Pack a shell and keep one indoor backup per day.",
      photo: {
        id: "season-summer",
        aspect: "2/3",
        keywords: "Xishuangbanna rainforest mist rainy season",
        altKeywords: [
          "Yuanyang green rice terraces summer lush Hani",
          "Honghe green rice terraces fog June",
        ],
        alt: "Root arches over a forest path in Xishuangbanna Primitive Forest Park",
        src: "/brand/destinations/yunnan/season-summer.webp",
      },
      cityAnchors: [
        { id: "lijiang", label: "Lijiang" },
        { id: "xishuangbanna", label: "Xishuangbanna" },
      ],
    },
    {
      id: "autumn",
      name: "Autumn",
      months: "Sep–Nov",
      climate: "Clearest mountain skies",
      body: "The photo season — Jade Dragon at its clearest. Days are stable; nights drop fast above 2,400 m. If you can move dates, take autumn.",
      photo: {
        id: "season-autumn",
        aspect: "2/3",
        keywords: "Shangri-La Pudacuo golden meadow autumn mountains",
        altKeywords: ["Lijiang clear sky Jade Dragon autumn"],
        alt: "Wooden village roofs and yellow autumn trees under snow peaks near Shangri-La",
        src: "/brand/destinations/yunnan/season-autumn.webp",
      },
      cityAnchors: [
        { id: "jade-dragon", label: "Jade Dragon" },
        { id: "dali-old-town", label: "Dali" },
      ],
    },
    {
      id: "winter",
      name: "Winter",
      months: "Dec–Feb",
      climate: "Mild Kunming · cold north Yunnan",
      body: "Fewer crowds, sharper mountains. Kunming stays usable; Lijiang mornings freeze. North Yunnan needs layers, not a beach wardrobe.",
      photo: {
        id: "season-winter",
        aspect: "2/3",
        keywords: "Yunshanping spruce meadow Jade Dragon snow winter yaks",
        altKeywords: [
          "Yuanyang terraces flooded mirrors winter",
          "Jade Dragon snow close-up winter blue sky",
        ],
        alt: "Yaks on Yunshanping meadow below snow-covered Jade Dragon in winter",
        src: "/brand/destinations/yunnan/season-winter-yunshanping.webp",
      },
      cityAnchors: [
        { id: "shuhe", label: "Shuhe" },
        { id: "kunming-landing", label: "Kunming" },
      ],
    },
  ],
  foods: [
    {
      id: "guoqiao",
      name: "Crossing-the-bridge noodles",
      localName: "过桥米线",
      body: "Yunnan’s most famous bowl. You assemble it at the table: scalding broth, rice noodles, thin meat, herbs. Order it once as a landing ritual — then hunt neighborhood mixian.",
      photo: {
        id: "food-guoqiao",
        aspect: "2/3",
        keywords: "Yunnan crossing the bridge noodles Guoqiao Mixian bowl",
        alt: "Crossing-the-bridge noodles with side dishes and two broths, Yunnan",
        src: "/brand/destinations/yunnan/food-guoqiao.webp",
      },
    },
    {
      id: "mixian",
      name: "Mixian rice noodles",
      localName: "米线",
      body: "The bowl you will eat twice a day. Breakfast, hangover food, midnight food. Chili, pickled greens, a runny egg if you want it.",
      photo: {
        id: "food-mixian",
        aspect: "2/3",
        keywords: "Kunming mixian rice noodles chili table",
        alt: "Small-pot mixian with minced pork and chili broth, Kunming",
        src: "/brand/destinations/yunnan/food-mixian.webp",
      },
    },
    {
      id: "mushrooms",
      name: "Wild mushroom hotpot",
      localName: "野生菌火锅",
      body: "The rainy-season luxury people fly in for — not a street-stall dare. If a stall cannot name the fungus, skip it.",
      photo: {
        id: "food-mushrooms",
        aspect: "2/3",
        keywords: "Yunnan wild mushrooms hotpot seasonal",
        alt: "Basket of wild mushrooms beside a simmering chicken-broth hotpot, Yunnan",
        src: "/brand/destinations/yunnan/food-mushrooms.webp",
      },
    },
    {
      id: "qiguo",
      name: "Steam-pot chicken",
      localName: "汽锅鸡",
      body: "Jianshui’s clay steam-pot, chicken, and a clear broth. Heavy enough for a cool highland evening — share it, then walk.",
      photo: {
        id: "food-qiguo",
        aspect: "2/3",
        keywords: "Qiguo chicken Jianshui steam pot",
        alt: "Jianshui steam-pot chicken with dates and mushrooms in a clay funnel pot",
        src: "/brand/destinations/yunnan/food-qiguo.webp",
      },
    },
    {
      id: "flower-cake",
      name: "Rose flower cake",
      localName: "鲜花饼",
      body: "The Kunming pastry worth flying home with. Fresh batches beat airport boxes. Buy a small tin the day you leave.",
      photo: {
        id: "food-flower-cake",
        aspect: "2/3",
        keywords: "Yunnan flower cake rose pastry",
        alt: "Yunnan rose flower cake broken open to show the petal filling",
        src: "/brand/destinations/yunnan/food-flower-cake.webp",
      },
    },
  ],
  headings: {
    places: {
      eyebrow: "On this loop",
      title: "Jump to a stop",
      intro:
        "Highlights sit on the 7-day spine. Shangri-La and Xishuangbanna are 10-day add-ons — one on the rail, one off it.",
    },
    seasons: {
      eyebrow: "Best time to go",
      title: "Best time to visit Yunnan",
      intro:
        "四季如春 is Kunming’s plateau, not a packing list for the whole loop. Spring is the easiest first-timer window. Autumn is Jade Dragon’s clearest skies.",
    },
    foods: {
      eyebrow: "What to eat",
      title: "Five bowls on the loop",
      intro:
        "Crossing-the-bridge once, mixian every day, mushroom hotpot only in season. Bai grill lives in Local texture — not a sixth dish here.",
    },
    route: {
      eyebrow: "7-day spine",
      title: "The trains you actually buy",
    },
    skeleton: {
      eyebrow: "7-day skeleton",
      title: "A week you can keep",
      intro:
        "Thin on purpose. Drop a day in Dali if you hate old towns; add one if Erhai is the point. We do not pad this into a tour script.",
    },
    related: {
      eyebrow: "Keep going",
      title: "Visa, trains, and hotels — prep that makes Yunnan easy",
    },
    faq: "Yunnan travel questions, answered",
  },
  routeIntro:
    "Fly into Kunming, ride west, end at Lijiang. Shangri-La is an on-line extra. Jinghong is not on this map’s main stroke.",
  routeDays: [
    {
      day: 1,
      title: "Land in Kunming",
      body: "Green Lake at dusk, a bowl of mixian, early night.",
      photo: {
        id: "route-d1",
        aspect: "2/3",
        keywords: "Kunming city Green Lake dusk",
        alt: "Green Lake at dusk with lanterns reflected in the water, Kunming",
        src: "/brand/destinations/yunnan/route-d1.webp",
      },
    },
    {
      day: 2,
      title: "Rail to Dali",
      body: "Morning fast train (~2 hrs). Old town walk; save Erhai for tomorrow.",
      photo: {
        id: "route-d2",
        aspect: "2/3",
        keywords: "Dali ancient town wall gate mountains",
        alt: "South gate of Dali Old Town with lanterns and flower beds",
        src: "/brand/destinations/yunnan/route-d2.webp",
      },
    },
    {
      day: 3,
      title: "Erhai, slow",
      body: "Village side of the lake. Three Pagodas only if you want the postcard.",
      photo: {
        id: "route-d3",
        aspect: "2/3",
        keywords: "Erhai lakeside village cangshan reflection",
        alt: "Bai village fields beside Erhai Lake with Cangshan across the water",
        src: "/brand/destinations/yunnan/route-d3.webp",
      },
    },
    {
      day: 4,
      title: "Train to Lijiang",
      body: "Short rail hop. Check in at Shuhe, not the loudest old-town gate.",
      photo: {
        id: "route-d4",
        aspect: "2/3",
        keywords: "Dali Lijiang train countryside Yunnan",
        alt: "Train cabin looking out at fields and mountains on the Dali–Lijiang hop",
        src: "/brand/destinations/yunnan/route-d4.webp",
      },
    },
    {
      day: 5,
      title: "Lijiang morning",
      body: "Canals before the crowds. Leave the night market if it feels like a mall.",
      photo: {
        id: "route-d5",
        aspect: "2/3",
        keywords: "Lijiang canal bridges willow old town day",
        alt: "Lijiang Old Town rooftops and pink blossom with Jade Dragon beyond",
        src: "/brand/destinations/yunnan/route-d5.webp",
      },
    },
    {
      day: 6,
      title: "Jade Dragon — or Shuhe",
      body: "Mountain if the sky is clean; streams if it is not.",
      photo: {
        id: "route-d6",
        aspect: "2/3",
        keywords: "Shuhe ancient town quiet stream Jade Dragon",
        alt: "Turquoise Blue Moon Valley below snow peaks of Jade Dragon",
        src: "/brand/destinations/yunnan/route-d6.webp",
      },
    },
    {
      day: 7,
      title: "Buffer, then fly",
      body: "Fly from Lijiang or roll back to Kunming. Keep this day empty.",
      photo: {
        id: "route-d7",
        aspect: "2/3",
        keywords: "Kunming airport or Yunnan mountain road vista",
        alt: "Plane lifting off past mountains at golden hour, Kunming airport",
        src: "/brand/destinations/yunnan/route-d7.webp",
      },
    },
  ],
  routeCtaTitle: "Want this Yunnan loop built around your dates?",
  routeCtaBody:
    "Tell us your days and whether Shangri-La or Jinghong is actually in scope. A 7-day spine is $129 early bird (6–10 day tier) — not the $99 five-day price. Survival Kit prep is included.",
  faqs: [
    {
      question: "Do I need a special permit for Yunnan?",
      answer:
        "Not for the usual Kunming–Dali–Lijiang loop, unlike Tibet. Bring your passport for hotels. Far-west border towns are a different paperwork story. [Check whether you need a China visa](/do-i-need-a-visa-for-china) before you fly.",
    },
    {
      question: "How many days do you need in Yunnan?",
      answer:
        "Seven days covers the Kunming–Dali–Lijiang spine without rushing the trains. Shangri-La is just over an hour by train from Lijiang — add one or two nights. Xishuangbanna needs three to four extra days plus a backtrack to Kunming. Pick one extra region, not both.",
    },
    {
      question: "Why is the custom PDF $129, not $99?",
      answer:
        "A 7-day Yunnan loop sits in the 6–10 day planning tier: $129 early bird (regular $169). The $99 early-bird price is for trips up to 5 days. Nothing is charged until we confirm scope. Survival Kit is included with the paid PDF.",
    },
    {
      question: "When is the best time to visit Yunnan?",
      answer:
        "March–May is the easiest first-timer window. September–November is clearest for Jade Dragon. June–August brings afternoon storms. Winter is quieter and cold in Lijiang. Kunming itself stays mild — that is 四季如春, not a forecast for the mountain.",
    },
    {
      question: "Is Yunnan really spring all year (四季如春)?",
      answer:
        "Kunming is — 春城 at about 1,900 m. The 7-day loop is not one climate: Dali is still a mild basin, Lijiang mornings frost, Shangri-La is highland winter, and Jinghong is tropical.",
    },
    {
      question: "Shangri-La or Xishuangbanna on a first Yunnan trip?",
      answer:
        "Pick one, not both. Shangri-La stays on the rail line from Lijiang. Xishuangbanna is off-line: a separate Kunming–Jinghong train or flight, three to four extra days, and a backtrack. The 7-day loop itself stops at Lijiang.",
    },
    {
      question: "Can I visit Yunnan without a tour?",
      answer:
        "Yes. Independent travel is the usual way foreigners do Kunming–Dali–Lijiang: you buy the fast trains, book hotels that take a foreign passport, and skip the night-market old town if you want sleep.",
    },
    {
      question: "Kunming Station or Kunming South?",
      answer:
        "Read the ticket. 昆明站 is downtown; 昆明南站 is in Chenggong, 25–30 km away. Many Dali/Lijiang C-trains use 昆明站, but not all. Mixing them up is the classic missed-train story. [Transport in China](/transport-in-china) covers tickets.",
    },
    {
      question: "Is Lijiang worth visiting?",
      answer:
        "Yes if you treat Dayan as a morning walk and the mountain as the point. Stay in Shuhe or a village if you want sleep.",
    },
    {
      question: "Is Yunnan the same visa as the rest of China?",
      answer:
        "Yes. Yunnan does not have its own visa. Use the [visa checker](/china-visa-checker) for your passport, then plan cities.",
    },
  ],
  related: [
    {
      title: "China visa checker",
      href: "/china-visa-checker",
      excerpt: "See if your passport needs a visa before you lock Yunnan dates.",
    },
    {
      title: "Transport in China",
      href: "/transport-in-china",
      excerpt: "High-speed rail, station flow, and how foreigners actually buy tickets.",
    },
    {
      title: "Hotels in China",
      href: "/hotels-in-china",
      excerpt: "What to book as a foreigner — and what still needs a passport scan.",
    },
    {
      title: "How to plan a China itinerary",
      href: "/china-itinerary-planning",
      excerpt: "Days, pace, and how Yunnan sits on a wider China route.",
    },
    {
      title: "China Digital Survival Kit",
      href: "/survival-kit",
      excerpt: "eSIM, Alipay, maps, and the checklist independent Yunnan trips actually use.",
    },
    {
      title: "Independent travel in China",
      href: "/independent-travel-china",
      excerpt: "Whether China is realistic without a tour — and what to set up first.",
    },
  ],
  dateModified: "2026-08-25",
};
