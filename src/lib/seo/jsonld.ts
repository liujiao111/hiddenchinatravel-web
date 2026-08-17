import {
  SITE_EMAIL,
  SITE_FOUNDER_NAME,
  SITE_FOUNDER_PATH,
  SITE_FOUNDER_PICTURE,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  socialLinks,
} from "@/lib/constants";

const founderId = `${SITE_URL}${SITE_FOUNDER_PATH}`;
const orgId = `${SITE_URL}/#organization`;

export function founderImageUrl(): string {
  return `${SITE_URL}${SITE_FOUNDER_PICTURE}`;
}

export function founderPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: SITE_FOUNDER_NAME,
    jobTitle: "Founder",
    image: founderImageUrl(),
    url: founderId,
    email: SITE_EMAIL,
    sameAs: socialLinks.map((s) => s.href),
    worksFor: { "@id": orgId },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kunming",
      addressRegion: "Yunnan",
      addressCountry: "CN",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO_PATH}`,
    email: SITE_EMAIL,
    description: SITE_TAGLINE,
    founder: { "@id": founderId },
    sameAs: socialLinks.map((s) => s.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kunming",
      addressRegion: "Yunnan",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: { "@id": orgId },
    inLanguage: "en-US",
  };
}

export function articleAuthorJsonLd(input?: {
  name?: string;
  picture?: string;
}) {
  return {
    "@type": "Person" as const,
    name: input?.name || SITE_FOUNDER_NAME,
    url: founderId,
    image: input?.picture
      ? `${SITE_URL}${input.picture}`
      : founderImageUrl(),
    sameAs: socialLinks.map((s) => s.href),
    jobTitle: "Founder",
    worksFor: { "@id": orgId },
  };
}
