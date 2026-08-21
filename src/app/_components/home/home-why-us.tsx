import Container from "@/app/_components/container";
import { homeWhyUs } from "@/lib/home/content";
import Link from "next/link";
import type { ReactNode } from "react";

function ExperienceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 13.5 5.5 11a2.1 2.1 0 0 1 0-3l1-1a2.1 2.1 0 0 1 3 0L12 9.5" />
      <path d="m16 13.5 2.5-2.5a2.1 2.1 0 0 0 0-3l-1-1a2.1 2.1 0 0 0-3 0L12 9.5" />
      <path d="M8.5 14.5 11 17a2 2 0 0 0 2.8 0l.7-.7" />
      <path d="M15.5 14.5 13 17" />
      <path d="M4 14v3.5A1.5 1.5 0 0 0 5.5 19H8" />
      <path d="M20 14v3.5a1.5 1.5 0 0 1-1.5 1.5H16" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const icons: Record<(typeof homeWhyUs.points)[number]["id"], ReactNode> = {
  experience: <ExperienceIcon className="h-7 w-7" />,
  support: <HandshakeIcon className="h-7 w-7" />,
  commission: <ShieldIcon className="h-7 w-7" />,
};

/** Compact trust strip — claim + 3 amenity-style cards under the hero. */
export function HomeWhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-10 md:py-14 lg:py-16"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Why us
          </p>
          <h2 className="text-xl font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-2xl lg:text-[1.65rem]">
            {homeWhyUs.claim}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
          {homeWhyUs.points.map((point) => (
            <li key={point.id}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-[var(--brand-cta)]/10 bg-white px-5 py-6 text-center shadow-[0_4px_20px_rgba(80,40,24,0.1)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(80,40,24,0.18)] md:min-h-[220px] md:px-6 md:py-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center text-[var(--brand-cta)]">
                  {icons[point.id]}
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-lg">
                  {point.title}
                </h3>
                <p className="text-xs font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-sm">
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
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-7 text-center md:mt-8">
          <Link
            href={homeWhyUs.storyHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_40%,transparent)] underline-offset-[5px] transition-colors duration-300 hover:text-[var(--brand-coral-hover)]"
          >
            {homeWhyUs.storyCta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
