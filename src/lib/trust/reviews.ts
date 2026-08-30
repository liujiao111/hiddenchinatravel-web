/** Real traveler quotes only. Never invent names, stars, or reviews. */

export type PublishedReview = {
  id: string;
  quote: string;
  /** First name + country — never a fabricated identity */
  displayName: string;
  tripSummary: string;
  date: string;
  permission: "written";
};

/** Fill only after written permission from a completed paid trip. */
export const publishedReviews: PublishedReview[] = [];

export const reviewsPageCopy = {
  title: "Traveler notes",
  description:
    "Short quotes from people who used our custom itinerary planning. We only publish notes we have permission to share — this list stays empty until then.",
  emptyTitle: "No public notes yet",
  emptyBody:
    "We are a small local partner, not a review mill. When a traveler finishes a paid itinerary and agrees in writing, their note will appear here. Until then, use the sample route, read why I started Hidden China Travel, or request a plan — no fabricated quotes.",
  howWeCollect: [
    "Quote comes from a completed custom-itinerary or itinerary-review client — not a friend, not an affiliate, not a partner writing about themselves.",
    "We ask by email after delivery. We do not offer discounts in exchange for a 5-star line.",
    "We may shorten for length. We do not rewrite the meaning.",
  ],
} as const;
