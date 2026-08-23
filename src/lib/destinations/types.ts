import type { HubFaq } from "@/lib/hubs/types";

export type PhotoAspect = "16/9" | "2/3" | "5/4";

export type DestinationPhoto = {
  id: string;
  aspect: PhotoAspect;
  /** Paste into Unsplash / Pexels / Adobe Stock. */
  keywords: string;
  altKeywords?: string[];
  alt: string;
  src?: string;
};

export type DestinationFact = {
  label: string;
  value: string;
};

export type DestinationCityStop = {
  id: string;
  name: string;
  role: string;
  pitch: string;
  seasonHint: string;
  body: string;
  photo: DestinationPhoto;
  plannerHref: string;
};

export type DestinationSeason = {
  id: string;
  name: string;
  months: string;
  climate: string;
  body: string;
  photo: DestinationPhoto;
  cityAnchors: { id: string; label: string }[];
};

export type DestinationClimateNote = {
  label: string;
  title: string;
  body: string;
  points: { label: string; body: string }[];
};

export type DestinationFood = {
  id: string;
  name: string;
  localName?: string;
  body: string;
  photo: DestinationPhoto;
};

export type DestinationRouteDay = {
  day: number;
  title: string;
  body: string;
  photo: DestinationPhoto;
};

export type DestinationRelatedLink = {
  title: string;
  href: string;
  excerpt: string;
};

export type DestinationSectionCopy = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export type DestinationNavItem = {
  href: string;
  label: string;
};

export type DestinationPrepareStep = {
  id: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
};

export type DestinationPrepare = {
  eyebrow: string;
  title: string;
  intro: string;
  tourLabel: string;
  independentLabel: string;
  tourPoints: string[];
  independentPoints: string[];
  steps: DestinationPrepareStep[];
  ctaTitle: string;
  ctaBody: string;
};

export type RegionDestination = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  eyebrow: string;
  lede: string;
  ctaHint: string;
  /** Hero / prepare / route planner button. Defaults to sitewide “Plan my China trip”. */
  plannerCtaLabel?: string;
  /** Planner URL for this region. Defaults to `/china-itinerary-planner#plan-trip`. */
  plannerHref?: string;
  heroMain: DestinationPhoto;
  heroSideA: DestinationPhoto;
  heroSideB: DestinationPhoto;
  facts: DestinationFact[];
  nav: DestinationNavItem[];
  prepare?: DestinationPrepare;
  /** Mosaic: first city is the large landscape; next two stack as portraits. */
  cities: DestinationCityStop[];
  climate?: DestinationClimateNote;
  seasons: DestinationSeason[];
  foods: DestinationFood[];
  headings: {
    places: DestinationSectionCopy;
    seasons: DestinationSectionCopy;
    foods: DestinationSectionCopy;
    route: DestinationSectionCopy;
    related: DestinationSectionCopy;
    faq: string;
  };
  routeIntro: string;
  routeDays: DestinationRouteDay[];
  routeCtaTitle: string;
  routeCtaBody: string;
  faqs: HubFaq[];
  related: DestinationRelatedLink[];
  dateModified: string;
};
