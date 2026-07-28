export type ActionRailCtaVariant = "primary" | "secondary" | "affiliate";

export type ActionRailCta = {
  id: string;
  label: string;
  href: string;
  variant: ActionRailCtaVariant;
  external?: boolean;
  /** data-cta value for analytics hooks */
  trackingId: string;
};

export type ActionRailContent = {
  eyebrow: string;
  title: string;
  support: string;
  tabLabel: string;
  mobileBarLabel: string;
  primaryCtaLabel: string;
  ctas: readonly ActionRailCta[];
};

export type ActionRailVisibility = {
  /** Paths where the rail must never render (e.g. /go affiliate jumps). */
  hiddenPathPrefixes: readonly string[];
};

export type ActionRailBehavior = {
  /** sessionStorage key prefix; auto-expand is stored per pathname */
  autoPromptStorageKey: string;
  scrollThreshold: number;
  dwellMs: number;
};
