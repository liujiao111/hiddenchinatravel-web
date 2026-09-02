"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/track";

type Props = {
  articleSlug?: string;
};

/** Low-commitment route review between free guides and paid planning. */
export function YunnanRouteCheck({ articleSlug }: Props) {
  const href = "/contact?service=free-yunnan-route-check";

  return (
    <aside
      className="my-10 rounded-2xl border-2 border-[var(--brand-cta)]/15 bg-[var(--brand-soft)] p-6 md:my-12 md:p-8"
      aria-label="Free Yunnan route check"
    >
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
        Free route check
      </p>
      <h3 className="text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
        Not sure whether Dali needs two or three nights?
      </h3>
      <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        Send Joy your travel month, total Yunnan days, and the cities you are
        considering. She&apos;ll tell you whether the route works before you
        book every hotel.
      </p>
      <p className="mt-4 text-xs font-normal tracking-wide text-[var(--brand-muted)]">
        For independent travelers · No tour package · No obligation
      </p>
      <Link
        href={href}
        className="btn-brand mt-6 inline-flex px-6 py-3.5 text-sm"
        onClick={() =>
          trackEvent("yunnan_route_check_click", {
            placement: "dali_travel_guide",
            href,
            article_slug: articleSlug,
          })
        }
      >
        Check my Yunnan route
        <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}
