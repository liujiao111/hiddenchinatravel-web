import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { ToolBreadcrumb } from "../_components/tool-breadcrumb";
import { OfficialSources } from "../_components/official-sources";
import { CountryConclusion } from "./_components/country-conclusion";
import { CountryDisclaimer } from "./_components/country-disclaimer";
import { CountryFaq } from "./_components/country-faq";
import { CountryNotes } from "./_components/country-notes";
import { CountryRoutesAndLinks } from "./_components/country-routes-and-links";
import {
  countryPagePath,
  getCountryVisaPage,
  getPhase1CountryEditorials,
  resolveCountrySlug,
} from "@/lib/visa-checker/country-pages";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";

type Props = {
  params: Promise<{ country: string }>;
};

export function generateStaticParams() {
  return getPhase1CountryEditorials().map((e) => ({ country: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const page = getCountryVisaPage(country);
  if (!page) {
    return { title: "China Visa Guide" };
  }

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: countryPagePath(page.editorial.slug),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: countryPagePath(page.editorial.slug),
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

function buildJsonLd(page: NonNullable<ReturnType<typeof getCountryVisaPage>>) {
  const url = `${SITE_URL}${countryPagePath(page.editorial.slug)}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      dateModified: page.editorial.lastReviewed,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tools",
          item: `${SITE_URL}/tools`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "China Visa Checker",
          item: `${SITE_URL}/china-visa-checker`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.editorial.displayName,
          item: url,
        },
      ],
    },
  ];
}

export default async function CountryVisaPage({ params }: Props) {
  const { country: raw } = await params;
  const resolved = resolveCountrySlug(raw);
  if (resolved !== raw.trim().toLowerCase()) {
    permanentRedirect(countryPagePath(resolved));
  }

  const page = getCountryVisaPage(resolved);
  if (!page) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page)) }}
      />
      <Container>
        <ToolBreadcrumb
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Visa Checker", href: "/china-visa-checker" },
            { label: page.editorial.displayName },
          ]}
        />

        <section className="mb-8 md:mb-10">
          <p className="mb-4 text-xs font-normal uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            Travel China Guide · Visa & Entry · {page.editorial.displayName}
          </p>
          <h1 className="mb-4 text-2xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-4xl">
            {page.h1}
          </h1>
          <p className="max-w-3xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            Clear {page.editorial.displayName} passport rules for China in 2026
            — visa-free stay, 240-hour transit, or when you must apply before
            travel. Recheck edge cases in the{" "}
            <Link
              href="/china-visa-checker"
              className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
            >
              interactive visa checker
            </Link>
            .
          </p>
        </section>

        <CountryConclusion page={page} />
        <CountryNotes page={page} />
        <CountryFaq faqs={page.faqs} />
        <CountryRoutesAndLinks page={page} />
        <CountryDisclaimer />
        <div className="mb-16 md:mb-20">
          <OfficialSources />
        </div>
        <LastUpdated
          date={page.editorial.lastReviewed}
          className="mb-20 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-6 md:mb-28"
        />
      </Container>
    </main>
  );
}
