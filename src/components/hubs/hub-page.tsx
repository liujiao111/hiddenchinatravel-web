import { AffiliateClickTracker } from "@/components/affiliates/affiliate-click-tracker";
import type { Hub } from "@/lib/hubs/types";
import Link from "next/link";
import { HubFaq } from "./hub-faq";
import { HubProse } from "./hub-prose";
import { HubQuickNav, type HubNavItem } from "./hub-quick-nav";

type Props = {
  hub: Hub;
};

export function HubPage({ hub }: Props) {
  const navItems: HubNavItem[] = [
    ...hub.subtopics.map((s) => ({ id: s.id, label: s.name })),
    ...(hub.beforeYouArrive
      ? [{ id: "before-you-arrive", label: "Before you arrive" }]
      : []),
    ...(hub.decisionGuide
      ? [{ id: "decision-guide", label: "Decision guide" }]
      : []),
    ...(hub.mistakes ? [{ id: "mistakes", label: "Mistakes to avoid" }] : []),
    ...(hub.toolCTA.length ? [{ id: "tools", label: "Next steps" }] : []),
    ...(hub.affiliateExit
      ? [{ id: "booking-path", label: "Booking path" }]
      : []),
    ...(hub.faqs.length ? [{ id: "faq", label: "FAQ" }] : []),
    ...(hub.relatedHubs?.length
      ? [{ id: "related-hubs", label: "Related hubs" }]
      : []),
  ];

  const primaryCta = hub.toolCTA[0];

  return (
    <div id="top" className="pb-24 md:pb-32">
      <AffiliateClickTracker surface="hub" />
      <header className="mb-12 md:mb-16">
        {hub.eyebrow ? (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            {hub.eyebrow}
          </p>
        ) : null}
        <h1 className="mb-5 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:mb-6 md:text-4xl">
          {hub.title}
        </h1>
        {hub.description ? (
          <p className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
            {hub.description}
          </p>
        ) : null}

        {hub.heroAnswer ? (
          <div className="surface-card max-w-3xl bg-[var(--brand-soft)] p-6 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Quick Answer
            </p>
            <p className="text-base font-normal leading-relaxed text-[var(--brand-ink)] md:text-lg">
              {hub.heroAnswer}
            </p>
          </div>
        ) : null}

        {primaryCta ? (
          <div className="mt-8">
            <Link
              href={primaryCta.href}
              className="btn-brand inline-flex px-8 py-3.5 text-[15px]"
            >
              {primaryCta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ) : null}
      </header>

      <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-16">
        <aside className="min-w-0">
          <HubQuickNav items={navItems} />
        </aside>

        <div className="min-w-0 space-y-20 md:space-y-28">
          {hub.subtopics
            .map((subtopic) => ({
              ...subtopic,
              articles: subtopic.articles.filter(
                (article) => article.status !== "placeholder",
              ),
            }))
            .filter((subtopic) => subtopic.articles.length > 0)
            .map((subtopic) => (
            <section
              key={subtopic.id}
              id={subtopic.id}
              aria-labelledby={`${subtopic.id}-heading`}
              className="scroll-mt-28"
            >
              <h2
                id={`${subtopic.id}-heading`}
                className="mb-4 text-xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-3xl"
              >
                {subtopic.name}
              </h2>
              {subtopic.description ? (
                <p className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {subtopic.description}
                </p>
              ) : null}
              <ul className="space-y-4">
                {subtopic.articles.map((article) => (
                  <li key={`${subtopic.id}-${article.href}-${article.title}`}>
                    <ArticleRow article={article} />
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {hub.beforeYouArrive ? (
            <section
              id="before-you-arrive"
              aria-labelledby="before-you-arrive-heading"
              className="scroll-mt-28"
            >
              <p className="mb-3 text-xs font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
                Before you arrive
              </p>
              <h2
                id="before-you-arrive-heading"
                className="mb-6 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
              >
                {hub.beforeYouArriveHeading ||
                  "Why this prep matters before you land"}
              </h2>
              <HubProse text={hub.beforeYouArrive} className="max-w-2xl" />
            </section>
          ) : null}

          {hub.decisionGuide ? (
            <section
              id="decision-guide"
              aria-labelledby="decision-guide-heading"
              className="scroll-mt-28"
            >
              <p className="mb-3 text-xs font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
                Decision guide
              </p>
              <h2
                id="decision-guide-heading"
                className="mb-4 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
              >
                {hub.decisionGuide.title}
              </h2>
              {hub.decisionGuide.intro ? (
                <p className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
                  {hub.decisionGuide.intro}
                </p>
              ) : null}
              <ul className="mb-8 max-w-2xl space-y-4">
                {hub.decisionGuide.points.map((point) => (
                  <li
                    key={point.slice(0, 48)}
                    className="border-l border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pl-4 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              {hub.decisionGuide.recommendation ? (
                <div className="surface-card max-w-2xl bg-[var(--brand-surface)] p-6 md:p-8">
                  <p className="mb-2 text-xs font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
                    Simplest recommendation
                  </p>
                  <HubProse
                    text={hub.decisionGuide.recommendation}
                    className="text-[var(--brand-ink)]"
                  />
                </div>
              ) : null}
            </section>
          ) : null}

          {hub.mistakes ? (
            <section
              id="mistakes"
              aria-labelledby="mistakes-heading"
              className="scroll-mt-28"
            >
              <p className="mb-3 text-xs font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
                Mistakes to avoid
              </p>
              <h2
                id="mistakes-heading"
                className="mb-8 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
              >
                {hub.mistakes.title}
              </h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {hub.mistakes.items.map((item) => (
                  <li
                    key={item.title}
                    className="surface-card border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] p-6 transition-colors duration-500 hover:bg-white"
                  >
                    <h3 className="mb-3 text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                      {item.body}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-4 inline-flex text-sm font-bold tracking-tight text-[var(--brand-cta)] transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
                      >
                        Read the guide →
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {hub.toolCTA.length ? (
            <section
              id="tools"
              aria-labelledby="tools-heading"
              className="scroll-mt-28"
            >
              <div className="surface-card bg-[var(--brand-soft)] p-8 md:p-12">
                <h2
                  id="tools-heading"
                  className="mb-4 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
                >
                  {hub.toolsHeading || "Ready for the next step?"}
                </h2>
                <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
                  {hub.toolsIntro ||
                    "Start with the main guide, then go deeper based on what you need for your trip."}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {hub.toolCTA.map((cta, index) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className={
                        index === 0
                          ? "btn-brand justify-center px-8 py-3.5 text-[15px]"
                          : "btn-brand-outline justify-center px-8 py-3.5 text-[15px]"
                      }
                    >
                      {cta.label}
                      {index === 0 ? <span aria-hidden>→</span> : null}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {hub.affiliateExit ? (
            <section
              id="booking-path"
              aria-labelledby="booking-path-heading"
              className="scroll-mt-28"
            >
              <div className="surface-card border border-[color-mix(in_srgb,var(--brand-cta)_14%,transparent)] bg-white p-8 md:p-10">
                <div className="surface-card-bar" aria-hidden />
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
                  {hub.affiliateExit.eyebrow}
                </p>
                <h2
                  id="booking-path-heading"
                  className="mb-3 text-xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-2xl"
                >
                  {hub.affiliateExit.title}
                </h2>
                <p className="mb-6 max-w-xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                  {hub.affiliateExit.body}
                </p>
                <a
                  href={hub.affiliateExit.href}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="btn-brand-outline inline-flex px-6 py-3 text-sm"
                >
                  {hub.affiliateExit.ctaLabel}
                </a>
                <p className="mt-4 text-xs font-normal text-[var(--brand-ink-muted)]">
                  Affiliate link — at no extra cost to you. Guides above stay
                  commission-neutral.
                </p>
              </div>
            </section>
          ) : null}

          {hub.faqs.length ? (
            <HubFaq faqs={hub.faqs} heading={hub.faqHeading} />
          ) : null}

          {hub.relatedHubs?.length ? (
            <section
              id="related-hubs"
              aria-labelledby="related-hubs-heading"
              className="scroll-mt-28"
            >
              <p className="mb-3 text-xs font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
                Related hubs
              </p>
              <h2
                id="related-hubs-heading"
                className="mb-8 text-xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-3xl"
              >
                What to prepare next for your China trip
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {hub.relatedHubs.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="surface-card block h-full border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] p-6 transition-colors duration-500 hover:bg-white"
                    >
                      <h3 className="mb-2 text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                        {item.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <footer className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-8 text-sm font-bold tracking-tight text-[var(--brand-ink-muted)]">
            <a
              href="#top"
              className="transition-colors duration-300 hover:text-[var(--brand-ink)]"
            >
              Back to top
            </a>
            <Link
              href="/survival-guides"
              className="transition-colors duration-300 hover:text-[var(--brand-ink)]"
            >
              All survival guides
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

function ArticleRow({
  article,
}: {
  article: Hub["subtopics"][number]["articles"][number];
}) {
  const inner = (
    <>
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <h3 className="text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
          {article.title}
        </h3>
        {article.badge ? (
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-mango)]">
            {article.badge}
          </span>
        ) : null}
      </div>
      <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {article.excerpt}
      </p>
      <span className="mt-3 inline-flex text-sm font-bold tracking-tight text-[var(--brand-ink)]">
        Read guide →
      </span>
    </>
  );

  if (article.status === "placeholder") {
    return null;
  }

  return (
    <Link
      href={article.href}
      className="surface-card block border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] p-6 transition-colors duration-500 hover:bg-white"
    >
      {inner}
    </Link>
  );
}
