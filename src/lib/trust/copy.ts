/** Sitewide trust copy — CTAs, SLAs, prices. Import here; do not fork strings. */

export const PRIMARY_CTA_LABEL = "Plan my China trip";
export const SECONDARY_CTA_LABEL = "Get Free Survival Kit";

export const ON_TRIP_PRICE = 29.9;
export const ON_TRIP_PRICE_LABEL = "$29.90";
export const ON_TRIP_PRICE_FROM = "from $29.90";

export const WHATSAPP_NAV_LABEL = "Message us";
export const WHATSAPP_CARD_TITLE = "Scan to message Hidden China Travel";

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
