/** Secondary / add-on service cards — data-driven, edit here. */

export type ServiceCtaAction = "contact-form" | "direct-purchase";

export type ServiceCardProps = {
  id: string;
  icon: "search-icon" | "chat-icon" | "ticket-icon";
  title: string;
  slogan?: string;
  description: string;
  /** Longer copy shown under the short description (optional) */
  detail?: string;
  priceLabel: string;
  /** Numeric price for schema.org Offer */
  offerPrice: number;
  priceCurrency?: string;
  ctaText: string;
  ctaAction: ServiceCtaAction;
  /** Form anchor (#…) or checkout path */
  ctaTarget: string;
  reassurance?: string;
  details?: string[];
};

export const secondaryServices: ServiceCardProps[] = [
  {
    id: "itinerary-review",
    icon: "search-icon",
    title: "Existing Itinerary Review",
    description: "Already have a plan? We'll review it with local insight.",
    detail:
      "Got a rough itinerary from a blog, a friend, or ChatGPT? We'll flag what's overrated, what's missing, and what will actually make your trip memorable.",
    priceLabel: "$50/hr (30-min minimum)",
    offerPrice: 50,
    ctaText: "Book a Session",
    ctaAction: "contact-form",
    ctaTarget: "#consultation-form",
    reassurance: "Start with 30 minutes — from $25.",
  },
  {
    id: "booking-assistance",
    icon: "ticket-icon",
    title: "Booking Assistance",
    description: "We compare prices, book for you, and send the receipt.",
    detail:
      "No markup on the item itself — transparent service fee only. Domestic flights $10 · International $15–20 · Other bookings from $5.",
    priceLabel: "Flights from $10 · Others from $5",
    offerPrice: 5,
    ctaText: "Request Booking Help",
    ctaAction: "contact-form",
    ctaTarget: "#booking-form",
    reassurance: "No markup — transparent fee + receipt.",
    details: [
      "Domestic flights: $10 per booking",
      "International flights: $15–20 per booking",
      "Hotels / tickets / trains / rides: $5 under $100; 5% if $100+",
    ],
  },
];

export const servicesTransition = {
  eyebrow: "Add-on support",
  title: "Need Something Else? We've Got You.",
  subtitle:
    "Light-touch help when you already have a plan — or want someone to book with proof. On-trip emergencies live in the story section above.",
} as const;
