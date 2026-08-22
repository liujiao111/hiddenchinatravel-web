import Container from "@/app/_components/container";
import { homeWhyUs } from "@/lib/home/content";
import Link from "next/link";

/** Trust intro as a short letter + list — not a SaaS icon-card row. */
export function HomeWhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-12 md:py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="max-w-xl lg:col-span-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              {homeWhyUs.eyebrow}
            </p>
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-[var(--brand-cta)] md:text-3xl">
              {homeWhyUs.headline}
            </h2>
            <p className="mt-4 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              {homeWhyUs.claim}
            </p>
            <Link
              href={homeWhyUs.storyHref}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_40%,transparent)] underline-offset-[5px] transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
            >
              {homeWhyUs.storyCta}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ol className="lg:col-span-7">
            {homeWhyUs.points.map((point, index) => (
              <li
                key={point.id}
                className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] py-5 first:border-t-0 first:pt-0 last:pb-0 md:py-6"
              >
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-base font-bold leading-snug tracking-tight text-[var(--brand-cta)] md:text-lg">
                  {point.title}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {point.body}
                  {"inlineLink" in point && point.inlineLink ? (
                    <>
                      {" "}
                      <Link
                        href={point.inlineLink.href}
                        className="font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2 transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
                      >
                        {point.inlineLink.label} →
                      </Link>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
