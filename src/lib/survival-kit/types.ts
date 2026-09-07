export type KitCta = {
  label: string;
  href: string;
  external?: boolean;
  trackingModule: string;
};

/** Prep checklist card — one topic, optional product options */
export type KitProductOption = {
  name: string;
  /** One-line when-to-choose / difference */
  diff: string;
  badge?: string;
  /** Official / brand app icon under /assets/survival-kit/apps/ */
  logoSrc?: string;
  /** Omit for options that are advice rather than something to click through to. */
  primaryCta?: KitCta;
  secondaryCta?: KitCta;
};

export type KitPrepCardData = {
  title: string;
  /** One concrete thing worth knowing before you set this up */
  note: string;
  options: KitProductOption[];
  footerGuide?: KitCta;
  /** When true, hide buy CTAs and show a coming-soon note */
  comingSoon?: boolean;
  comingSoonNote?: string;
};

export type KitPrepSectionData = {
  id: string;
  /** Step number shown in the section rail, e.g. "01" */
  step: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: KitPrepCardData[];
};

export type KitChecklistItem = {
  id: string;
  label: string;
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
  step: string;
  eyebrow: string;
  title: string;
  intro: string;
  emergencyTitle: string;
  emergencyNote: string;
  emergencies: KitEmergencyRow[];
  factsTitle: string;
  facts: KitFactRow[];
};
