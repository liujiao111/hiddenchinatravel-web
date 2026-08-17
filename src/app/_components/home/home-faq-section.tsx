import dynamic from "next/dynamic";
import Container from "@/app/_components/container";
import { homeFaqSection, homeFaqs } from "@/lib/home/faq-content";
import Link from "next/link";

const HomeFaqAccordion = dynamic(
  () =>
    import("@/app/_components/home/home-faq-accordion").then(
      (m) => m.HomeFaqAccordion,
    ),
  {
    loading: () => (
      <div
        className="min-h-[12rem] rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white/70"
        aria-hidden
      />
    ),
  },
);

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answerPlain,
      },
    })),
  };
}

/** Practical SEO FAQ strip — common China survival / travel queries. */
export function HomeFaqSection() {
  const jsonLd = buildFaqJsonLd();

  return (
    <section
      id="china-travel-faqs"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-bold tracking-tight text-[var(--brand-coral)]">
              {homeFaqSection.eyebrow}
            </p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
              {homeFaqSection.title}
            </h2>
            <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              {homeFaqSection.intro}
            </p>
          </div>
          <Link
            href="/survival-kit"
            className="btn-brand-outline shrink-0 text-sm"
          >
            Get Free Survival Kit
          </Link>
        </div>

        <HomeFaqAccordion />
      </Container>
    </section>
  );
}
