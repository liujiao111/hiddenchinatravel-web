import Container from "@/app/_components/container";
import { HomePrepBuyMenu } from "@/app/_components/home/home-prep-buy-menu";
import { HomePrepVisaMini } from "@/app/_components/home/home-prep-visa-mini";
import {
  homePrepSection,
  homePrepSteps,
  type HomePrepStep,
} from "@/lib/home/prep-content";
import { getQuickVisaLookup } from "@/lib/home/get-quick-visa-lookup";
import Link from "next/link";
import type { ReactNode } from "react";

function PrepCardShell({
  step,
  children,
}: {
  step: HomePrepStep;
  children: ReactNode;
}) {
  return (
    <article className="surface-card flex h-full flex-col p-5 md:p-6">
      <div className="surface-card-bar" aria-hidden />
      <p className="surface-card-label mb-3">Step {step.step}</p>
      <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug tracking-tight text-[var(--brand-cta)] md:text-xl">
        {step.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {step.body}
      </p>
      <div className="mt-auto space-y-3">{children}</div>
    </article>
  );
}

export function HomeGettingStarted() {
  const visaLookup = getQuickVisaLookup();

  return (
    <section
      id="getting-started"
      className="scroll-mt-24 border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            {homePrepSection.eyebrow}
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
            {homePrepSection.title}
          </h2>
          <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            {homePrepSection.intro}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {homePrepSteps.map((step) => (
            <li
              key={step.id}
              className={
                step.kind === "visa" || step.kind === "buy-menus"
                  ? "relative z-10"
                  : undefined
              }
            >
              <PrepCardShell step={step}>
                {step.kind === "visa" ? (
                  <HomePrepVisaMini lookup={visaLookup} />
                ) : null}

                {step.kind === "buy-menus"
                  ? step.menus.map((menu) => (
                      <HomePrepBuyMenu key={menu.buttonLabel} menu={menu} />
                    ))
                  : null}

                {step.kind === "simple" ? (
                  <div className="space-y-2">
                    <Link
                      href={step.cta.href}
                      className="btn-brand inline-flex w-full justify-center px-4 py-2.5 text-sm"
                    >
                      {step.cta.label}
                    </Link>
                    <p className="text-xs font-normal text-[var(--brand-ink-muted)]">
                      Prefer a hub overview?{" "}
                      <Link
                        href={step.guide.href}
                        className="font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-2"
                      >
                        {step.guide.label} →
                      </Link>
                    </p>
                  </div>
                ) : null}

                {step.kind === "soon" ? (
                  <p className="rounded-2xl border-2 border-dashed border-[color-mix(in_srgb,var(--brand-cta)_25%,transparent)] bg-white/70 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-[var(--brand-muted)]">
                    Coming soon
                  </p>
                ) : null}
              </PrepCardShell>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center md:mt-12">
          <Link
            href={homePrepSection.kitCta.href}
            className="btn-brand inline-flex px-8 py-3.5 text-sm md:text-base"
          >
            {homePrepSection.kitCta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
