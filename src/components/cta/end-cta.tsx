"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/track";
import type { EndCtaCopy } from "@/config/cta";
import { WHEN_TO_HIRE } from "@/lib/trust/copy";

type Props = {
  copy: EndCtaCopy;
  articleSlug?: string;
};

/** End-of-article CTA — planner-first on route articles, when-to-hire on systems. */
export function EndCTA({ copy, articleSlug }: Props) {
  const isSystems = copy.intent === "systems";

  return (
    <aside
      className="mt-14 rounded-2xl border-2 border-[var(--brand-cta)]/15 bg-[var(--brand-soft)] p-6 md:mt-16 md:p-8"
      aria-label={isSystems ? WHEN_TO_HIRE.eyebrow : copy.buttonLabel}
    >
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
        {isSystems ? WHEN_TO_HIRE.eyebrow : "Next step"}
      </p>
      <p className="mb-3 text-base font-bold leading-snug tracking-tight text-[var(--brand-ink)] md:text-lg">
        {copy.bridge}
      </p>
      <p className="mb-6 max-w-xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {copy.valueProp}
      </p>
      {isSystems && copy.secondaryHref && copy.secondaryLabel ? (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={copy.secondaryHref}
            className="btn-brand-outline inline-flex w-full justify-center px-6 py-3.5 text-sm sm:w-auto"
            onClick={() =>
              trackEvent(copy.trackingEvent, {
                placement: "end_diy",
                href: copy.secondaryHref,
                article_slug: articleSlug,
              })
            }
          >
            {copy.secondaryLabel}
            <span aria-hidden>→</span>
          </Link>
          <Link
            href={copy.href}
            className="inline-flex w-full items-center justify-center px-2 py-2 text-sm font-bold tracking-tight text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)] sm:w-auto sm:px-3"
            onClick={() =>
              trackEvent(copy.trackingEvent, {
                placement: "end",
                href: copy.href,
                article_slug: articleSlug,
              })
            }
          >
            {copy.buttonLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : (
        <Link
          href={copy.href}
          className="btn-brand w-full px-6 py-3.5 text-sm md:w-auto md:min-w-[14rem]"
          onClick={() =>
            trackEvent(copy.trackingEvent, {
              placement: "end",
              href: copy.href,
              article_slug: articleSlug,
            })
          }
        >
          {copy.buttonLabel}
          <span aria-hidden>→</span>
        </Link>
      )}
      {copy.trust ? (
        <p className="mt-4 text-xs font-normal tracking-wide text-[var(--brand-muted)]">
          {copy.trust}
        </p>
      ) : null}
    </aside>
  );
}
