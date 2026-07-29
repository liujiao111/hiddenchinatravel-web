import Container from "@/app/_components/container";
import { LastUpdated } from "@/app/_components/last-updated";
import { ToolBreadcrumb } from "@/app/china-visa-checker/_components/tool-breadcrumb";
import { ConverterDisclaimer } from "./_components/converter-disclaimer";
import { ConverterFaq } from "./_components/converter-faq";
import { ConverterGuideCopy } from "./_components/converter-guide-copy";
import { CurrencyConverterTool } from "./_components/currency-converter-tool";
import { RelatedPaymentGuides } from "./_components/related-payment-guides";
import { faqItems } from "@/lib/currency-converter/faq-items";
import { getExchangeRates } from "@/lib/currency-converter/get-rates";
import { SITE_LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

const pageTitle =
  "China Currency Converter: USD to CNY & CNY to USD (Live RMB Rates)";
const pageDescription =
  "Free China currency converter for travelers — convert USD to CNY or CNY to USD (plus EUR, GBP, HKD), see mid-market rates vs typical ATM markups, and plan your cash budget.";
const pageKeywords = [
  "CNY to USD converter",
  "USD to CNY converter",
  "China currency exchange rate",
  "RMB to USD",
  "how much is 100 yuan in dollars",
  "China currency converter",
  "yuan exchange rate",
];

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: pageKeywords,
  alternates: {
    canonical: "/china-currency-converter",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/china-currency-converter",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export const revalidate = 3600;

function buildJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "China Currency Converter",
      url: `${SITE_URL}/china-currency-converter`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: pageDescription,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
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
          name: "China Currency Converter",
          item: `${SITE_URL}/china-currency-converter`,
        },
      ],
    },
  ];
}

export default async function ChinaCurrencyConverterPage() {
  const initialRates = await getExchangeRates();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <Container>
        <ToolBreadcrumb
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Currency Converter" },
          ]}
        />
        <section className="mb-10 md:mb-12">
          <p className="mb-4 text-xs font-light uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            Travel China Guide · Payments
          </p>
          <h1 className="mb-4 text-2xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-4xl">
            China Currency Converter — USD to CNY & CNY to USD
          </h1>
          <p className="mb-6 max-w-3xl text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            Live mid-market RMB rates for trip budgeting. Convert dollars,
            euros, pounds, and more to Chinese Yuan — or flip the other way when
            you need “how much is 100 yuan in USD?”
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["USD ↔ CNY", "EUR / GBP / HKD", "ATM markup check"].map(
              (pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] px-3.5 py-1.5 text-sm font-light text-[var(--brand-ink)]"
                >
                  <span aria-hidden className="text-[var(--brand-cta)]">
                    ✓
                  </span>
                  {pill}
                </span>
              ),
            )}
          </div>
        </section>

        <CurrencyConverterTool initialRates={initialRates} />
        <ConverterDisclaimer />
        <ConverterGuideCopy />
        <RelatedPaymentGuides />
        <ConverterFaq />
        <LastUpdated
          date={SITE_LAST_UPDATED}
          className="mb-20 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-6 md:mb-28"
        />
      </Container>
    </main>
  );
}
