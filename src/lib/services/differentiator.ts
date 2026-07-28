/** Story-led differentiator for on-trip human help (not in secondary grid). */

export const differentiatorContent = {
  id: "differentiator",
  eyebrow: "On-trip human help",
  title: "The Service AI Can't Replace",
  subtitle:
    "When maps fail, payments error, or the subway dump you at the wrong exit — a real local walks you through it.",
  cta: {
    label: "Get On-Trip Help",
    href: "/checkout/on-trip-help",
    trackingEvent: "services_differentiator_cta_click",
  },
  impressionEvent: "services_differentiator_impression",
  signals: [
    { id: "response", label: "30-min response", icon: "clock" as const },
    { id: "hours", label: "Mon–Fri 9AM–9PM", icon: "calendar" as const },
    { id: "human", label: "Real human, not AI", icon: "person" as const },
  ],
  scenarios: [
    {
      id: "alipay",
      icon: "pay" as const,
      situation: "Alipay declined at a night-market stall — dinner on the line.",
      resolution: "Walked through the fix in 12 minutes.",
    },
    {
      id: "metro",
      icon: "metro" as const,
      situation: "Wrong Beijing subway exit — luggage, no Chinese, rush hour.",
      resolution: "Rerouted to the street exit in 8 minutes.",
    },
    {
      id: "wifi",
      icon: "wifi" as const,
      situation: "Hotel Wi‑Fi blocks WhatsApp and maps after midnight.",
      resolution: "Working VPN path restored in 15 minutes.",
    },
  ],
} as const;

/** Product data for checkout — kept out of SecondaryServicesGrid. */
export const onTripHelpProduct = {
  id: "on-trip-help",
  icon: "chat-icon" as const,
  title: "On-Trip Quick Help",
  slogan: "We don't solve it for you — we help you find the way.",
  description:
    '5 quick-answer credits for those "what do I do now" moments.',
  detail:
    "Not 24/7 concierge — message during business hours (9AM–9PM Mon–Fri, China time) and get a real answer within ~30 minutes for typical questions.",
  priceLabel: "$29.9 / 5 Questions",
  offerPrice: 29.9,
  priceCurrency: "USD",
  ctaText: "Get Help Now",
  ctaAction: "direct-purchase" as const,
  ctaTarget: "/checkout/on-trip-help",
  reassurance: "Business-hours response — not unattended chat.",
};
