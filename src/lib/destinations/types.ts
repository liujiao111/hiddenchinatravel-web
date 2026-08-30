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

export type DestinationFit = {
  eyebrow: string;
  title: string;
  intro: string;
  yesLabel: string;
  noLabel: string;
  yes: string[];
  no: string[];
};

export type DestinationHighlight = {
  id: string;
  name: string;
  localName?: string;
  role: string;
  body: string;
  photo: DestinationPhoto;
};

export type DestinationTextureNote = {
  id: string;
  name: string;
  localName?: string;
  body: string;
};

export type DestinationBudgetLine = {
  label: string;
  value: string;
  note?: string;
};

export type DestinationBudget = {
  eyebrow: string;
  title: string;
  intro: string;
  lines: DestinationBudgetLine[];
  planningNote: string;
};

export type DestinationTrainStop = {
  id: string;
  name: string;
  localName: string;
  body: string;
};

export type DestinationTrains = {
  eyebrow: string;
  title: string;
  intro: string;
  stations: DestinationTrainStop[];
};

export type DestinationAddon = {
  id: string;
  name: string;
  localName?: string;
  /** On the Kunming–Dali–Lijiang rail spine vs a separate southbound hop. */
  onLine: boolean;
  badge: string;
  body: string;
};

export type DestinationAddons = {
  eyebrow: string;
  title: string;
  intro: string;
  items: DestinationAddon[];
};

export type DestinationMapPoint = {
  id: string;
  name: string;
  localName?: string;
  lat: number;
  lng: number;
  role: string;
  /** Stops on the 7-day rail spine (drawn as the main line). */
  onLoop: boolean;
};

export type DestinationLoopMap = {
  eyebrow: string;
  title: string;
  intro: string;
  points: DestinationMapPoint[];
};

export type DestinationPlaceLink = {
  id: string;
  label: string;
  href: string;
  note?: string;
};

export type DestinationWhyIKnow = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image: { src: string; alt: string };
  founderHref?: string;
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
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Path under /public for Open Graph. Falls back to the site hero. */
  ogImage?: string;
  /** Early-bird custom-planning price for this loop (USD). */
  offerPrice?: number;
  heroMain: DestinationPhoto;
  heroSideA: DestinationPhoto;
  heroSideB: DestinationPhoto;
  facts: DestinationFact[];
  nav: DestinationNavItem[];
  fit?: DestinationFit;
  loopMap?: DestinationLoopMap;
  highlights?: DestinationHighlight[];
  texture?: {
    eyebrow: string;
    title: string;
    intro: string;
    notes: DestinationTextureNote[];
  };
  budget?: DestinationBudget;
  trains?: DestinationTrains;
  addons?: DestinationAddons;
  whyIKnow?: DestinationWhyIKnow;
  placeLinks?: DestinationPlaceLink[];
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
    skeleton?: DestinationSectionCopy;
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
