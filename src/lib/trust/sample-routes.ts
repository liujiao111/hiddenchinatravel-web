/** Work samples — labeled as samples, never as client testimonials. */

export type SampleRouteStop = {
  day: string;
  title: string;
  note: string;
};

export type SampleRoute = {
  id: string;
  label: string;
  title: string;
  region: string;
  days: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  stops: SampleRouteStop[];
  disclaimer: string;
};

export const sampleRoutes: SampleRoute[] = [
  {
    id: "southwest-rural-loop",
    label: "Sample route",
    title: "Chongqing → rural Xiangxi → Fenghuang → Zhangjiajie",
    region: "Southwest China",
    days: "About 10 days",
    intro:
      "A pace we often sketch for independent travelers who want documentary photography and villages — not a staged show circuit. Overnight bases: Chongqing, a rural Xiangxi stretch, Fenghuang, then Zhangjiajie. That fills about 10 days; it is not four tourist-hub cities stacked as a greatest-hits loop. Most days stay self-guided; one or two days can use a local fixer + car around a real market day.",
    imageSrc:
      "/assets/blog/independent-travel-china/china-high-speed-train-hexie-hao-station.webp",
    imageAlt:
      "China high-speed train at a station — illustration for a sample independent itinerary, not a client trip photo",
    stops: [
      {
        day: "Days 1–2",
        title: "Chongqing arrival",
        note: "Settle in, night streets, one river crossing. No rush to ‘see everything’.",
      },
      {
        day: "Days 3–5",
        title: "Youyang–Xiushan–Huayuan corridor",
        note: "Villages and markets when they actually happen. Skip ethnic-park performances.",
      },
      {
        day: "Days 6–7",
        title: "Fenghuang & Furong",
        note: "Keep these — stay overnight so the old town is not a day-trip crush.",
      },
      {
        day: "Days 8–9",
        title: "Zhangjiajie (self-paced)",
        note: "Landscape days; tickets booked ahead. Independent, not a package tour.",
      },
      {
        day: "Day 10",
        title: "Return to Chongqing",
        note: "Buffer for trains. Fly out when your international ticket is ready.",
      },
    ],
    disclaimer:
      "This is a sample of how we think about a route — not a published client itinerary and not a promise of the same days for every trip.",
  },
];
