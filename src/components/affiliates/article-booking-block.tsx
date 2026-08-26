"use client";

import { trackEvent } from "@/lib/analytics/track";
import type { ArticleBookingBlock } from "@/lib/affiliates/article-booking-blocks";
import {
  AFFILIATE_CLICK_EVENT,
  affiliateSlugFromHref,
} from "@/lib/affiliates/tracking";
import Link from "next/link";

type Props = {
  block: ArticleBookingBlock;
  articleSlug?: string;
};

function trackIfAffiliate(href: string, articleSlug?: string) {
  const slug = affiliateSlugFromHref(href);
  if (!slug) return;
  trackEvent(AFFILIATE_CLICK_EVENT, {
    affiliate_slug: slug,
    surface: "article_booking_block",
    ...(articleSlug ? { article_slug: articleSlug } : {}),
  });
}

/** Calm booking / compare band — never replaces the Planner End CTA. */
export function ArticleBookingBlockCard({ block, articleSlug }: Props) {
  const primaryIsGo = block.primary.href.startsWith("/go/");
  const secondaryIsGo = block.secondary?.href.startsWith("/go/");

  return (
    <aside
      className="surface-card my-10 h-auto border border-[color-mix(in_srgb,var(--brand-cta)_14%,transparent)] bg-white p-6 md:my-12 md:p-8"
      aria-label={block.title}
    >
      <div className="surface-card-bar" aria-hidden />
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        {block.eyebrow}
      </p>
      <h2 className="mb-3 text-lg font-bold tracking-tight text-[var(--brand-ink)] md:text-xl">
        {block.title}
      </h2>
      <p className="mb-6 max-w-xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {block.body}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {primaryIsGo ? (
          <a
            href={block.primary.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => trackIfAffiliate(block.primary.href, articleSlug)}
            className="btn-brand-outline inline-flex justify-center px-6 py-3 text-sm"
          >
            {block.primary.label}
          </a>
        ) : (
          <Link
            href={block.primary.href}
            className="btn-brand-outline inline-flex justify-center px-6 py-3 text-sm"
          >
            {block.primary.label}
          </Link>
        )}
        {block.secondary ? (
          secondaryIsGo ? (
            <a
              href={block.secondary.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() =>
                trackIfAffiliate(block.secondary!.href, articleSlug)
              }
              className="inline-flex items-center justify-center text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
            >
              {block.secondary.label} →
            </a>
          ) : (
            <Link
              href={block.secondary.href}
              className="inline-flex items-center justify-center text-sm font-bold text-[var(--brand-coral)] underline decoration-[color-mix(in_srgb,var(--brand-coral)_35%,transparent)] underline-offset-2"
            >
              {block.secondary.label} →
            </Link>
          )
        ) : null}
      </div>
      <p className="mt-4 text-xs font-normal text-[var(--brand-ink-muted)]">
        Some links are affiliate — at no extra cost to you. Our primary advice
        stays commission-neutral.
      </p>
    </aside>
  );
}
