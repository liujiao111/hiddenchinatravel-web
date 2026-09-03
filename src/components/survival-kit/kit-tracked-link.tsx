"use client";

import Link from "next/link";
import { trackEvent as trackSiteEvent } from "@/lib/analytics/track";
import {
  AFFILIATE_CLICK_EVENT,
  affiliateSlugFromHref,
} from "@/lib/affiliates/tracking";
import { trackEvent } from "@/lib/survival-kit/track";
import type { KitCta } from "@/lib/survival-kit/types";

type Props = {
  cta: KitCta;
  variant?: "primary" | "outline" | "text";
  className?: string;
};

export function KitTrackedLink({ cta, variant = "primary", className }: Props) {
  const onClick = () => {
    trackEvent("cta_click", {
      module: cta.trackingModule,
      label: cta.label,
      href: cta.href,
      external: Boolean(cta.external),
    });
    const slug = affiliateSlugFromHref(cta.href);
    if (slug) {
      trackSiteEvent(AFFILIATE_CLICK_EVENT, {
        affiliate_slug: slug,
        surface: "survival_kit",
        module: cta.trackingModule,
      });
    }
  };

  const base =
    variant === "primary"
      ? "btn-brand justify-center px-6 py-3 text-sm"
      : variant === "outline"
        ? "btn-brand-outline justify-center px-6 py-3 text-sm"
        : "inline-flex text-sm font-bold tracking-tight text-[var(--brand-cta)] transition-colors duration-300 hover:text-[var(--brand-cta-hover)]";

  const isAffiliateGo =
    cta.href.startsWith("/go/") || cta.href.includes("/go/");

  if (cta.external || isAffiliateGo) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel={
          isAffiliateGo
            ? "sponsored noopener noreferrer"
            : "noopener noreferrer"
        }
        data-affiliate-tracked={isAffiliateGo ? "true" : undefined}
        onClick={onClick}
        className={`${base} ${className ?? ""}`}
      >
        {cta.label}
        {variant !== "text" ? <span aria-hidden>→</span> : null}
      </a>
    );
  }

  return (
    <Link href={cta.href} onClick={onClick} className={`${base} ${className ?? ""}`}>
      {cta.label}
      {variant === "primary" ? <span aria-hidden>→</span> : null}
    </Link>
  );
}
