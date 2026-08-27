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
/**
 * Paid planning vs labeled affiliate tools. Do not say “no OTA commissions”
 * without this split — guides include Trip.com / eSIM / VPN affiliate links.
 */
export const FEES = {
  homepagePointTitle: "Fee-only planning",
  homepagePointBody:
    "Paid itineraries take no hotel or OTA commissions — a clear service fee, with invoices. Some free guides include labeled affiliate links (same price to you).",
  paidPlanning:
    "Paid itinerary advice does not take commissions from hotels, attractions, or OTAs. If we book for you, we charge a clear service fee and can invoice.",
  bookingHelp:
    "Need something booked locally? We can help. Booking help is a clear service fee with an invoice — not a hotel or OTA markup.",
  vsAgencyLead:
    "Paid itinerary advice does not take commissions from attractions, hotels, or OTAs. There is no inventory to push.",
  affiliatesHelp:
    "Some guides include affiliate links to tools that help with travel logistics. They never raise your price. We only include them when they directly help solve the problem in that guide.",
  affiliateSingular:
    "Affiliate link — we may earn a commission; same price to you.",
  affiliatePlural:
    "Affiliate links — we may earn a commission; same price to you.",
  affiliateWithPlanning:
    "Affiliate link — we may earn a commission; same price to you. Paid itinerary planning is separate and fee-only.",
  partnersReferral:
    "A referral path: you send an independent traveler; we plan locally on a service fee, with no hotel or OTA markup",
} as const;

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
