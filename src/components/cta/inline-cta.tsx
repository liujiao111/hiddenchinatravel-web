"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/track";
import type { InlineCtaCopy } from "@/config/cta";

type Props = {
  copy: InlineCtaCopy;
  articleSlug?: string;
};

/** Lightweight mid-article CTA — one line + text link, non-intrusive. */
export function InlineCTA({ copy, articleSlug }: Props) {
  return (
    <aside
      className="my-10 border-y border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] py-5"
      aria-label="Suggested next step"
    >
      <p className="text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        <span className="text-[var(--brand-ink)]">{copy.lead}</span>{" "}
        <Link
          href={copy.href}
          className="font-light tracking-wide text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cream-border)_50%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
          onClick={() =>
            trackEvent(copy.trackingEvent, {
              placement: "inline",
              href: copy.href,
              article_slug: articleSlug,
            })
          }
        >
          {copy.linkLabel}
        </Link>
      </p>
    </aside>
  );
}
