import Container from "@/app/_components/container";
import { homeWhyUs } from "@/lib/home/content";
import Link from "next/link";

/** Trust strip — Evaneos-style open columns, no icon cards. */
export function HomeWhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-10 md:py-14 lg:py-16"
    >
      <Container>
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Why us
          </p>
          <h2 className="text-xl font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-2xl lg:text-[1.65rem]">
            {homeWhyUs.claim}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {homeWhyUs.points.map((point) => (
            <li key={point.id}>
              <article className="flex h-full flex-col">
                <h3 className="mb-3 font-sans text-base font-bold leading-snug text-[var(--brand-ink)] md:text-lg">
                  {point.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {point.body}
                  {"inlineLink" in point && point.inlineLink ? (
                    <>
                      {" "}
                      <Link
                        href={point.inlineLink.href}
                        className="font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
                      >
                        {point.inlineLink.label} →
                      </Link>
                    </>
                  ) : null}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-7 md:mt-8">
          <Link
            href={homeWhyUs.storyHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_40%,transparent)] underline-offset-[5px] transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
          >
            {homeWhyUs.storyCta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
