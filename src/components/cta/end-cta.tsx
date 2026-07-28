"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/track";
import type { EndCtaCopy } from "@/config/cta";

type Props = {
  copy: EndCtaCopy;
  articleSlug?: string;
};

/** Primary end-of-article CTA band — shown on every post template. */
export function EndCTA({ copy, articleSlug }: Props) {
  return (
    <aside
      className="mt-14 border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-soft)] p-6 md:mt-16 md:p-8"
      aria-label="Plan my China trip"
    >
      <p className="mb-2 text-[11px] font-light uppercase tracking-[0.16em] text-[var(--brand-warm)]">
        Next step
      </p>
      <p className="mb-3 text-base font-light leading-relaxed tracking-wide text-[var(--brand-ink)] md:text-lg">
        {copy.bridge}
      </p>
      <p className="mb-6 max-w-xl text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {copy.valueProp}
      </p>
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
      {copy.trust ? (
        <p className="mt-4 text-xs font-light tracking-wide text-[var(--brand-muted)]">
          {copy.trust}
        </p>
      ) : null}
    </aside>
  );
}
