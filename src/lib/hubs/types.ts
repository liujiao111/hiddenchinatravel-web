export type HubArticleStatus = "published" | "placeholder";

export type HubArticleLink = {
  title: string;
  href: string;
  excerpt: string;
  badge?: string;
  status: HubArticleStatus;
};

export type HubSubtopic = {
  id: string;
  name: string;
  description: string;
  articles: HubArticleLink[];
};

export type HubToolCta = {
  label: string;
  href: string;
};

export type HubFaq = {
  question: string;
  answer: string;
};

export type HubDecisionGuide = {
  title: string;
  intro: string;
  points: string[];
  recommendation: string;
};

export type HubMistakeItem = {
  title: string;
  body: string;
  href?: string;
};

export type HubMistakes = {
  title: string;
  items: HubMistakeItem[];
};

export type HubRelatedLink = {
  title: string;
  href: string;
  excerpt: string;
};

/** Optional booking path — secondary to guides / Survival Kit. */
export type HubAffiliateExit = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
};

export type Hub = {
  type: "hub";
  title: string;
  /** Absolute document title for <title>/OG when set (preserves live SEO). */
  seoTitle?: string;
  slug: string;
  metaDescription: string;
  canonical: string;
  heroAnswer: string;
  description: string;
  eyebrow?: string;
  subtopics: HubSubtopic[];
  toolCTA: HubToolCta[];
  faqs: HubFaq[];
  faqHeading?: string;
  toolsHeading?: string;
  toolsIntro?: string;
  beforeYouArrive?: string;
  beforeYouArriveHeading?: string;
  decisionGuide?: HubDecisionGuide;
  mistakes?: HubMistakes;
  relatedHubs?: HubRelatedLink[];
  /** Scenario booking exit (Trip / eSIM / VPN) — not a hard sell. */
  affiliateExit?: HubAffiliateExit;
  dateModified?: string;
  keywords?: string[];
};
