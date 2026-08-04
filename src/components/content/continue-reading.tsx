"use client";

import { TropicalCard } from "@/app/_components/tropical-card";
import { trackEvent } from "@/lib/analytics/track";

export type ContinueReadingItem = {
  slug: string;
  title: string;
  excerpt: string;
};

type Props = {
  posts: ContinueReadingItem[];
  articleSlug?: string;
  /** Short card eyebrow; defaults to "Guide" */
  cardLabel?: string;
};

/** Same-section related guides under the article end CTA. */
export function ContinueReading({ posts, articleSlug, cardLabel }: Props) {
  if (!posts.length) return null;

  return (
    <section className="mt-12 md:mt-14" aria-labelledby="continue-reading-heading">
      <h2
        id="continue-reading-heading"
        className="mb-6 text-xl font-bold leading-snug tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        Continue reading
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4">
        {posts.map((post) => {
          const href = `/${post.slug}`;
          return (
            <TropicalCard
              key={post.slug}
              href={href}
              label={cardLabel || "Guide"}
              title={post.title}
              footerCta="Read"
              className="h-full"
              onNavigate={() =>
                trackEvent("article_related_click", {
                  href,
                  related_slug: post.slug,
                  article_slug: articleSlug,
                })
              }
            >
              {post.excerpt}
            </TropicalCard>
          );
        })}
      </div>
    </section>
  );
}
