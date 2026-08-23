import type { RegionDestination } from "./types";

const PLANNER = "/china-itinerary-planner?dest=yunnan#plan-trip";

export const yunnanDestination: RegionDestination = {
  slug: "yunnan",
  name: "Yunnan",
  seoTitle: "Independent Yunnan Travel: 7-Day Kunming–Dali–Lijiang Guide",
  metaDescription:
    "Independent Yunnan without a tour: why Kunming is Spring City (四季如春), a 7-day Kunming–Dali–Lijiang loop, and the prep foreigners actually need before they buy the train.",
  canonical: "/china-destinations/yunnan",
  h1: "Independent Yunnan: From Rainforest to Snow Mountains",
  eyebrow: "Southwest China · Spring City",
  lede:
    "Yunnan is famous for 四季如春 — spring in every season. The reason is Kunming: high plateau, southern sun, mild winters, no brutal summer. Then the independent loop leaves the basin — Erhai, a snow mountain, rainforest only with spare days. You hold your own tickets.",
  ctaHint:
    "Tell us your days. We send a 1-on-1 PDF you follow yourself — not a seven-day coach script.",
  plannerCtaLabel: "Plan this Yunnan loop",
  plannerHref: PLANNER,
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
    {
      label: "Where",
      value: "Southwest China, bordering Vietnam, Laos, and Myanmar",
    },
    {
      label: "Climate",
      value: "Spring City in Kunming · cold north · tropical south",
    },
    {
      label: "Languages",
      value: "Mandarin in cities; Bai, Naxi, Dai and others in towns",
    },
    { label: "Money", value: "CNY · Alipay/WeChat in cities, cash in villages" },
    {
      label: "Air",
      value: "Kunming (KMG) hub · Dali, Lijiang, Jinghong for hops",
    },
    { label: "Rail", value: "Fast trains Kunming–Dali–Lijiang · Kunming–Jinghong ~3.5 hrs" },
    {
      label: "Travel",
      value: "Independent: you buy the train, pick the nights",
    },
    {
      label: "Permits",
      value: "No Tibet-style permit on the usual Yunnan loop",
    },
  ],
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#places", label: "Places" },
    { href: "#season", label: "Season" },
    { href: "#food", label: "Food" },
    { href: "#prepare", label: "Prepare" },
    { href: "#route", label: "Route" },
    { href: "#faq", label: "FAQ" },
  ],
  prepare: {
    eyebrow: "Before you fly",
    title: "How to prepare for Yunnan — independently",
    intro:
      "Skip the seven-day coach: old town, cable car, night show, next city. Independent Yunnan is slower and better — you buy the Kunming–Dali–Lijiang train, sleep outside the souvenir streets, and add rainforest or plateau only if you have spare days. Do the digital prep at home so a village lunch still works.",
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
        body: "Kunming–Dali–Lijiang is fast rail, not a mystery coach. Jinghong is a separate Kunming fast train (about 3.5 hours) or a flight — not a casual day trip from Lijiang.",
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
    ctaTitle: "Want a Yunnan loop built around your days?",
    ctaBody:
      "Tell us your dates and whether you actually want the rainforest. We send a PDF you follow independently. Survival Kit prep is included.",
  },
  cities: [
    {
      id: "lijiang",
      name: "Lijiang",
      role: "Naxi highlands",
      pitch: "Jade Dragon on the skyline — and an old town that is magic before 10am.",
      seasonHint: "Comfortable April–October; winter is clear and cold.",
      body: "Come for the mountain, not the souvenir alleys after dark. Sleep in Shuhe or a slope village if you want quiet. Plan Jade Dragon around weather and altitude, then leave the night market to the tour groups. Dayan, Shuhe, and Baisha sit in a world-heritage zone — independent travelers may be asked for a 50 RMB yearly conservation fee, most often at Black Dragon Pool.",
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
      body: "Stay near the old town or a quieter Erhai village. Bike a morning of the shoreline; skip the bar strip if you came for mountains. The Three Pagodas are a short paid stop, not a full day — the old town itself has no ticket gate.",
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
      role: "Tropical south",
      pitch: "Palms, Dai temples, and heat — Yunnan’s tropical other half.",
      seasonHint: "Warm year-round; July–August is the muddiest rainforest stretch.",
      body: "This is not a casual day trip from Lijiang. Take the Kunming–Jinghong fast train (about 3.5 hours) or fly; a Lijiang–Jinghong through train exists but eats most of a day. Slow down: a monastery morning, a rainforest walk, grilled fish on banana leaf. Do not bolt it onto a tight Dali–Lijiang week.",
      plannerHref: PLANNER,
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
      body:
        "Kunming is 春城, Spring City, because it sits near 25°N at about 1,900 m: altitude takes the summer heat off, latitude keeps winter from freezing in town. That is the 四季如春 poster. Use a night here to reset after a long-haul — Green Lake, a bowl of mixian — then take the train west. Do not spend three days unless you like cities. The slogan stops at the basin; Lijiang mornings are another climate.",
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
      "Kunming sits near 25°N at about 1,900 m. Altitude takes the summer heat off; southern latitude keeps winter from freezing in town. That is 春城, and why you can land in January in a light jacket. A 7-day loop then climbs into frost and, if you add Jinghong, into rainforest heat. Come year-round for the basin — pack a warm layer for the mountain.",
    points: [
      {
        label: "Central plateau",
        body: "Kunming and the Dali basin. Cool summers, usable winters, flowers most of the year. This is the slogan.",
      },
      {
        label: "Northwest highlands",
        body: "Lijiang (~2,400 m) and Shangri-La (~3,200 m). Clear, cold nights; frost and snow on Jade Dragon. A warm layer is not optional.",
      },
      {
        label: "Tropical south",
        body: "Xishuangbanna. Hot, wet, rainforest — the opposite of spring. Don’t bolt it onto a tight Dali–Lijiang week.",
      },
    ],
  },
  seasons: [
    {
      id: "spring",
      name: "Spring",
      months: "Mar–May",
      climate: "Spring City days · flowers in the east",
      body: "The easiest first-timer window — and the one we suggest if you can move dates. Luoping’s canola peaks in February–March (gone by May), Kunming is walkable, and Yuanyang terraces still hold water in March. Book Dali and Lijiang beds early around holidays.",
      photo: {
        id: "season-spring",
        aspect: "2/3",
        keywords: "Luoping canola flower fields yellow Yunnan spring",
        altKeywords: ["Kunming camellia blossom"],
        alt: "Yellow canola fields at Luoping with karst peaks at dusk",
        src: "/brand/destinations/yunnan/season-spring.webp",
      },
      cityAnchors: [
        { id: "kunming", label: "Kunming" },
        { id: "dali", label: "Dali" },
      ],
    },
    {
      id: "summer",
      name: "Summer",
      months: "Jun–Aug",
      climate: "Rainforest heat · highland storms",
      body: "Green, loud, and worth it if you came for rainforest. Afternoons often rain. Xishuangbanna is hot and wet; Lijiang and Shangri-La stay cooler. Pack a shell and keep one indoor backup per day.",
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
        { id: "xishuangbanna", label: "Xishuangbanna" },
        { id: "lijiang", label: "Lijiang" },
      ],
    },
    {
      id: "autumn",
      name: "Autumn",
      months: "Sep–Nov",
      climate: "Clearest mountain skies",
      body: "The photo season — Jade Dragon and the high northwest at their clearest. Days are stable; nights drop fast above 2,400 m. If you can move dates, take autumn.",
      photo: {
        id: "season-autumn",
        aspect: "2/3",
        keywords: "Shangri-La Pudacuo golden meadow autumn mountains",
        altKeywords: ["Lijiang clear sky Jade Dragon autumn"],
        alt: "Wooden village roofs and yellow autumn trees under snow peaks near Shangri-La",
        src: "/brand/destinations/yunnan/season-autumn.webp",
      },
      cityAnchors: [
        { id: "lijiang", label: "Lijiang" },
        { id: "dali", label: "Dali" },
      ],
    },
    {
      id: "winter",
      name: "Winter",
      months: "Dec–Feb",
      climate: "Mild Kunming · cold north Yunnan",
      body: "Fewer crowds, sharper mountains. Kunming stays usable; Lijiang mornings freeze. Yunshanping sits under Jade Dragon in snow. North Yunnan needs layers, not a beach wardrobe.",
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
        { id: "lijiang", label: "Lijiang" },
        { id: "kunming", label: "Kunming" },
      ],
    },
  ],
  foods: [
    {
      id: "guoqiao",
      name: "Crossing-the-bridge noodles",
      localName: "过桥米线",
      body: "Yunnan’s most famous bowl. You assemble it at the table: scalding broth, rice noodles, thin meat, herbs. Order it once as a landing ritual — then hunt neighborhood mixian, which locals eat every day.",
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
      body: "The bowl you will eat twice a day. Breakfast, hangover food, midnight food. Chili, pickled greens, a runny egg if you want it. Point at the toppings — you do not need a translated menu.",
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
      body: "The rainy-season luxury people fly in for — not a street-stall dare. Go with a busy local restaurant. Yunnan’s forests have toxic lookalikes: if a stall cannot name the mushroom, skip it.",
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
      body: "Jianshui’s clay steam-pot, chicken, and a clear broth that tastes like the pot did the work. Heavy enough for a cool highland evening — share it, then walk.",
      photo: {
        id: "food-qiguo",
        aspect: "2/3",
        keywords: "Qiguo chicken Jianshui steam pot",
        alt: "Jianshui steam-pot chicken with dates and mushrooms in a clay funnel pot",
        src: "/brand/destinations/yunnan/food-qiguo.webp",
      },
    },
    {
      id: "xuanwei",
      name: "Xuanwei ham",
      localName: "宣威火腿",
      body: "Yunnan’s famous ham — cured, sliced thin, hiding in fried rice or a simple stir-fry. Salty, not a whole meal. Good for the train if you buy a sealed pack.",
      photo: {
        id: "food-xuanwei",
        aspect: "2/3",
        keywords: "Xuanwei ham Yunnan cured",
        alt: "Thin slice of Xuanwei ham lifted with chopsticks",
        src: "/brand/destinations/yunnan/food-xuanwei.webp",
      },
    },
    {
      id: "dai-fish",
      name: "Dai grilled fish",
      localName: "傣味烤鱼",
      body: "Xishuangbanna on a plate: lemongrass, chili, banana leaf. Eat it outdoors if you can — the smoke is half the point.",
      photo: {
        id: "food-dai-fish",
        aspect: "2/3",
        keywords: "Dai grilled fish lemongrass banana leaf Xishuangbanna",
        alt: "Dai grilled fish with lemongrass and chili sauce on a banana leaf",
        src: "/brand/destinations/yunnan/food-dai-fish.webp",
      },
    },
    {
      id: "flower-cake",
      name: "Rose flower cake",
      localName: "鲜花饼",
      body: "The Kunming pastry worth flying home with. Fresh batches beat airport boxes. Buy a small tin the day you leave — they crush in a backpack.",
      photo: {
        id: "food-flower-cake",
        aspect: "2/3",
        keywords: "Yunnan flower cake rose pastry",
        alt: "Yunnan rose flower cake broken open to show the petal filling",
        src: "/brand/destinations/yunnan/food-flower-cake.webp",
      },
    },
    {
      id: "erhai-grill",
      name: "Erhai lakeside grill",
      body: "The Dali night you came for: grilled fish, tofu, cumin smoke. Walk the strip, pick a stall with a line of locals, sit down — this is not a tasting menu.",
      photo: {
        id: "food-erhai",
        aspect: "2/3",
        keywords: "Erhai lakeside grilled Dali street food night",
        alt: "Shared grill table at a Dali night restaurant, with dipping spices and plates",
        src: "/brand/destinations/yunnan/food-erhai.webp",
      },
    },
  ],
  headings: {
    places: {
      eyebrow: "Where to go",
      title: "Kunming, Dali, Lijiang, Xishuangbanna — sequenced, not a checklist",
      intro:
        "Lijiang for the mountain, Dali for the lake, Xishuangbanna for the rainforest, Kunming as the landing. Four stops you sequence yourself — skip the night-market old town, and add the south or the plateau only with spare days.",
    },
    seasons: {
      eyebrow: "Best time to go",
      title: "Best time to visit Yunnan",
      intro:
        "四季如春 is Kunming’s plateau, not a packing list for the whole province. Spring is flowers and easy first-timer days. Summer is rainforest heat. Autumn is Jade Dragon’s clearest skies. Winter is snow at Yunshanping and fewer crowds. Pick the season for the region you came for.",
    },
    foods: {
      eyebrow: "What to eat",
      title: "What to eat in Yunnan (and what to skip)",
      intro:
        "Crossing-the-bridge noodles and mixian are the landing bowls. Wild mushroom hotpot is seasonal — skip any stall that cannot name the fungus. Eight dishes first-timers actually hunt down, plus the pastry you fly home with.",
    },
    route: {
      eyebrow: "7-day itinerary",
      title: "A 7-day Yunnan itinerary you can actually follow",
    },
    related: {
      eyebrow: "Keep going",
      title: "Visa, trains, and hotels — prep that makes Yunnan easy",
    },
    faq: "Yunnan travel questions, answered",
  },
  routeIntro:
    "The classic independent loop: fly into Kunming, fast trains west, then decide whether Lijiang is your last night. It is a sketch you can keep — drop a day in Dali if you hate old towns, add one if Erhai is the point.",
  routeDays: [
    {
      day: 1,
      title: "Land in Kunming",
      body: "Green Lake at dusk, a bowl of mixian, early night. Do not schedule a museum marathon after a long-haul.",
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
      title: "High-speed rail to Dali",
      body: "Morning fast train (about two hours). Walk the old town and Cangshan views; save Erhai for tomorrow.",
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
      title: "A slow day on Erhai",
      body: "Village side of the lake, bike or bus. Three Pagodas only if you want the postcard — a short paid stop, not a pilgrimage.",
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
      body: "Another short rail hop (about 1.5–2 hours). Check in at Shuhe or a quieter lane, not the loudest old-town gate.",
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
      title: "Lijiang before the crowds",
      body: "Canals and willow light in the morning. Leave the night market if it feels like a mall with lanterns.",
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
      title: "Jade Dragon — or quiet Shuhe",
      body: "Mountain day if the sky is clean; Shuhe streams if it is not. Check altitude if you came from sea level.",
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
      title: "Keep a buffer, then fly",
      body: "Fly from Lijiang or roll back to Kunming. Keep this day empty — highland weather slips.",
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
    "Tell us your days and pace. We send a 1-on-1 PDF you follow independently — not a poster itinerary. Survival Kit prep is included.",
  faqs: [
    {
      question: "Do I need a special permit for Yunnan?",
      answer:
        "Not for the usual Kunming–Dali–Lijiang–Jinghong loop, unlike Tibet. Bring your passport for hotels. Far-west border towns (Ruili, some Nujiang valleys) are a different paperwork story — stay on the usual loop and you will not need a Tibet-style permit. [Check whether you need a China visa](/do-i-need-a-visa-for-china) before you fly.",
    },
    {
      question: "How many days do you need in Yunnan?",
      answer:
        "Seven to ten days covers Kunming as a landing plus Dali and Lijiang without rushing the trains. Shangri-La is just over an hour by train from Lijiang — add one or two nights. Xishuangbanna needs three to four extra days. Pick one extra region on a first trip, not both.",
    },
    {
      question: "When is the best time to visit Yunnan?",
      answer:
        "There is no single Yunnan season. March–May is the easiest first-timer window (Luoping canola peaks in February–March). September–November is clearest for Jade Dragon. June–August is hot and wet in Xishuangbanna — still worth it if the rainforest is the point. Winter is quieter and cold in the north. Kunming itself stays mild most of the year — that is the 四季如春 slogan, not a forecast for Lijiang or Jinghong.",
    },
    {
      question: "Is Yunnan really spring all year (四季如春)?",
      answer:
        "Kunming is — 春城, Spring City, at about 1,900 m near 25°N, so summers stay cool and winters rarely freeze in town. The usual independent loop is not one climate: Dali is still a mild basin, Lijiang mornings frost, Shangri-La is genuine highland winter, and Xishuangbanna is tropical. Pack layers for the mountain, not a poster T-shirt wardrobe.",
    },
    {
      question: "Shangri-La or Xishuangbanna on a first Yunnan trip?",
      answer:
        "Pick one, not both. Shangri-La is just over an hour by train from Lijiang — add one or two nights if you want plateau and thinner air. Xishuangbanna is a separate Kunming fast train (about 3.5 hours) or a flight, and needs three to four extra days. The 7-day loop itself stops at Lijiang.",
    },
    {
      question: "Can I visit Yunnan without a tour?",
      answer:
        "Yes. Independent travel is the usual way foreigners do Kunming–Dali–Lijiang: you buy the fast trains, book hotels that take a foreign passport, and skip the night-market old town if you want sleep. Prep payments and data before you land — then use [how to plan a China itinerary](/china-itinerary-planning) if Yunnan sits on a wider China route.",
    },
    {
      question: "How do you get around Yunnan without a tour?",
      answer:
        "Fly into Kunming Changshui, then take fast trains to Dali and Lijiang. Jinghong (Xishuangbanna) is a separate Kunming fast train (about 3.5 hours) or a flight. Lijiang–Shangri-La is just over an hour by train since 2023. [Transport in China](/transport-in-china) covers tickets and station basics.",
    },
    {
      question: "Is Lijiang worth visiting?",
      answer:
        "Yes if you treat the old town as a morning walk and the mountain as the point. The night streets are skippable. Stay in Shuhe or a village if you want sleep.",
    },
    {
      question: "What is the rainy season like?",
      answer:
        "June to August brings afternoon storms and muddy rainforest paths in the south. Highlands stay cooler. Pack a shell and keep one indoor plan each day — do not cancel the whole trip.",
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
      title: "Attraction tickets",
      href: "/attraction-tickets-in-china",
      excerpt: "Why some parks want a real-name ticket before you queue.",
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
  dateModified: "2026-08-23",
};
