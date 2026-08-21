import { TropicalCard } from "@/app/_components/tropical-card";
import {
  publishedReviews,
  reviewsPageCopy,
} from "@/lib/trust/reviews";
import Link from "next/link";

export function PublishedReviews({
  showEmptyCtas = true,
}: {
  showEmptyCtas?: boolean;
}) {
  if (publishedReviews.length === 0) {
    return (
      <div className="rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-white p-6 md:p-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          Traveler notes
        </p>
        <p className="mb-3 text-xl font-bold tracking-tight text-[var(--brand-ink)]">
          {reviewsPageCopy.emptyTitle}
        </p>
        <p className="max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {reviewsPageCopy.emptyBody}
        </p>
        {showEmptyCtas ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services/custom-itinerary#sample-route"
              className="btn-brand inline-flex min-h-11 justify-center px-5 py-2.5 text-sm"
            >
              See how planning works
            </Link>
            <Link
              href="/partners"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--brand-cta)]/30 px-5 py-2.5 text-sm font-bold text-[var(--brand-cta)]"
            >
              Planner partnerships
            </Link>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {publishedReviews.map((review) => (
        <li key={review.id}>
          <TropicalCard
            as="blockquote"
            label={review.tripSummary}
            title={review.displayName}
            titleLines={0}
            bodyLines={0}
            footerMeta={review.date}
          >
            “{review.quote}”
          </TropicalCard>
        </li>
      ))}
    </ul>
  );
}
