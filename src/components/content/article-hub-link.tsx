"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/track";
import type { ArticleHubRef } from "@/lib/content/article-related";

type Props = {
  hub: ArticleHubRef;
  articleSlug?: string;
};

/** Quiet post-CTA link back to the topic hub — not a second primary button. */
export function ArticleHubLink({ hub, articleSlug }: Props) {
  return (
    <p className="mt-8 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
      <span className="text-[var(--brand-muted)]">More in this topic</span>
      {" · "}
      <Link
        href={hub.href}
        className="font-bold tracking-tight text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cream-border)_50%,transparent)] underline-offset-4 transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
        onClick={() =>
          trackEvent("article_hub_click", {
            href: hub.href,
            hub_label: hub.label,
            article_slug: articleSlug,
          })
        }
      >
        {hub.label}
      </Link>
    </p>
  );
}
