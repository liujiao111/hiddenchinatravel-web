/** Sitewide trust copy — CTAs, SLAs, prices. Import here; do not fork strings. */

export const PRIMARY_CTA_LABEL = "Plan my China trip";
export const SECONDARY_CTA_LABEL = "Get Free Survival Kit";
export const PLANNER_HREF = "/china-itinerary-planner";
export const SURVIVAL_GUIDES_HREF = "/survival-guides";
export const SURVIVAL_KIT_HREF = "/survival-kit";

/**
 * DIY vs paid split — homepage, guide index/hubs, and systems article ends.
 * Guides stay enough for forms and apps; pay only when the route is the problem.
 */
export const WHEN_TO_HIRE = {
  eyebrow: "When to hire us",
  bandLead:
    "The guides are enough for payments, data, trains, hotels, tickets, and forms.",
  bandBody:
    "A custom itinerary PDF is for when the route itself — which cities, how many days, what to skip — still isn't clear.",
  diyLabel: "Stay in the guides",
  diyHref: SURVIVAL_GUIDES_HREF,
  allGuidesLabel: "All survival guides",
  kitLabel: SECONDARY_CTA_LABEL,
  kitHref: SURVIVAL_KIT_HREF,
  hireLabel: PRIMARY_CTA_LABEL,
  hireHref: PLANNER_HREF,
  systemsBridge: "You don't need a custom itinerary to finish this setup.",
  systemsValue:
    "Hire us when cities, days, and pace still aren't clear. If you only needed this system working, this page is the whole job.",
  systemsTrust: "Guides stay free. Pay only when the route needs a local.",
} as const;

export const ON_TRIP_PRICE = 29.9;
export const ON_TRIP_PRICE_LABEL = "$29.90";
export const ON_TRIP_PRICE_FROM = "from $29.90";

export const WHATSAPP_NAV_LABEL = "Message us";
export const WHATSAPP_CARD_TITLE = "Scan to message Hidden China Travel";
export const WHATSAPP_FLOAT_LABEL = "Contact us";
export const WHATSAPP_FLOAT_HINT = "WhatsApp";

export const SLA = {
  businessHours: "Mon–Fri 9AM–9PM, China time",
  inquiryReply: "usually within 30 minutes during business hours",
  inquiryReplyShort: "30 minutes during business hours",
  plannerReply: "24–48 hours",
  pdfDelivery: "48–72 hours after you confirm",
  onTripReply:
    "typically within ~30 minutes during business hours (Mon–Fri 9AM–9PM, China time)",
} as const;

export const SLA_INQUIRY_SUCCESS = `Thanks — message received. We ${SLA.inquiryReply} (${SLA.businessHours}).`;

export const SLA_PLANNER_SUCCESS = `Thanks — your custom itinerary request is in. We'll reply within ${SLA.plannerReply} with next steps and pricing for your dates. Nothing is charged until you confirm scope with us.`;
