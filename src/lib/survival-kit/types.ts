export type KitCta = {
  label: string;
  href: string;
  external?: boolean;
  trackingModule: string;
};

export type KitIconName =
  | "esim"
  | "signal"
  | "alipay"
  | "wallet"
  | "vpn"
  | "shield"
  | "guide"
  | "hotel"
  | "train"
  | "ticket"
  | "flight"
  | "map"
  | "visa"
  | "insurance";

export type KitToolCardData = {
  kind: "tool" | "guide";
  icon: KitIconName;
  title: string;
  description: string;
  primaryCta: KitCta;
  secondaryLink?: KitCta;
  coverImage?: string;
  coverAlt?: string;
};

export type KitSectionData = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: KitToolCardData[];
};

/** Prep checklist card — one topic, optional product options */
export type KitProductOption = {
  name: string;
  /** One-line when-to-choose / difference */
  diff: string;
  badge?: string;
  /** Official / brand app icon under /assets/survival-kit/apps/ */
  logoSrc?: string;
  primaryCta: KitCta;
  secondaryCta?: KitCta;
};

export type KitPrepCardData = {
  icon: KitIconName;
  title: string;
  /** Short “why set this up before you land” copy */
  anxiety: string;
  options: KitProductOption[];
  footerGuide?: KitCta;
  /** When true, hide buy CTAs and show a coming-soon note */
  comingSoon?: boolean;
  comingSoonNote?: string;
};

export type KitPrepSectionData = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: KitPrepCardData[];
};

export type KitBookingCardData = {
  icon: KitIconName;
  title: string;
  description: string;
  primaryCta: KitCta;
  guideLink: KitCta;
};

export type KitChecklistItem = {
  id: string;
  label: string;
};

export type KitTestimonial = {
  quote: string;
  name: string;
  meta: string;
};

export type KitQuickNavItem = {
  id: string;
  label: string;
};

export type KitEmergencyRow = {
  service: string;
  number: string;
  chinese: string;
  when: string;
};

export type KitFactRow = {
  topic: string;
  answer: string;
  linkLabel?: string;
  linkHref?: string;
};

export type KitPracticalSectionData = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  emergencyTitle: string;
  emergencyNote: string;
  emergencies: KitEmergencyRow[];
  factsTitle: string;
  facts: KitFactRow[];
};
