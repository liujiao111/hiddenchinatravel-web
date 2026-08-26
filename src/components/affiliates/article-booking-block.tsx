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

function trackIfAffiliate(
  href: string,
  surface: string,
  articleSlug?: string,
) {
  const slug = affiliateSlugFromHref(href);
  if (!slug) return;
  trackEvent(AFFILIATE_CLICK_EVENT, {
    affiliate_slug: slug,
    surface,
    ...(articleSlug ? { article_slug: articleSlug } : {}),
  });
}

function isGoHref(href: string): boolean {
  return href.startsWith("/go/") || href.includes("/go/");
}

/** Compact first-viewport CTA — solid button, not a body-text link. */
export function ArticleLeadAffiliateCta({ block, articleSlug }: Props) {
  const lead = block.lead;
  if (!lead) return null;

  const href = block.primary.href;
  const go = isGoHref(href);

  return (
    <aside
      className="surface-card mb-8 h-auto border border-[color-mix(in_srgb,var(--brand-cta)_18%,transparent)] bg-white p-4 md:mb-10 md:p-5"
      aria-label={lead.title}
    >
      <div className="surface-card-bar" aria-hidden />
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        {lead.eyebrow}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className="text-base font-bold tracking-tight text-[var(--brand-ink)] md:text-lg">
            {lead.title}
          </p>
          {lead.hint ? (
            <p className="mt-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
              {lead.hint}
            </p>
          ) : null}
        </div>
        {go ? (
          <a
            href={href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() =>
              trackIfAffiliate(href, "article_lead_cta", articleSlug)
            }
            className="btn-brand inline-flex shrink-0 justify-center px-6 py-3 text-sm"
          >
            {block.primary.label}
            <span aria-hidden>→</span>
          </a>
        ) : (
          <Link
            href={href}
            className="btn-brand inline-flex shrink-0 justify-center px-6 py-3 text-sm"
          >
            {block.primary.label}
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>
      <p className="mt-3 text-xs font-normal text-[var(--brand-ink-muted)]">
        Affiliate link — same price to you.
      </p>
    </aside>
  );
}

/** End-of-article booking / setup band — solid primary, planner stays below. */
export function ArticleBookingBlockCard({ block, articleSlug }: Props) {
  const primaryIsGo = isGoHref(block.primary.href);
  const secondaryIsGo = Boolean(
    block.secondary && isGoHref(block.secondary.href),
  );

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
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {primaryIsGo ? (
          <a
            href={block.primary.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() =>
              trackIfAffiliate(
                block.primary.href,
                "article_booking_block",
                articleSlug,
              )
            }
            className="btn-brand inline-flex justify-center px-6 py-3 text-sm"
          >
            {block.primary.label}
            <span aria-hidden>→</span>
          </a>
        ) : (
          <Link
            href={block.primary.href}
            className="btn-brand inline-flex justify-center px-6 py-3 text-sm"
          >
            {block.primary.label}
            <span aria-hidden>→</span>
          </Link>
        )}
        {block.secondary ? (
          secondaryIsGo ? (
            <a
              href={block.secondary.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() =>
                trackIfAffiliate(
                  block.secondary!.href,
                  "article_booking_block",
                  articleSlug,
                )
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
        Affiliate links — same price to you.
      </p>
    </aside>
  );
}
