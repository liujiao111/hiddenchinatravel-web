import Container from "@/app/_components/container";
import { PublishedReviews } from "@/app/_components/trust/published-reviews";
import { reviewsPageCopy } from "@/lib/trust/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Traveler notes — Hidden China Travel" },
  description: reviewsPageCopy.description,
  alternates: { canonical: "/reviews" },
  robots: { index: true, follow: true },
};

export default function ReviewsPage() {
  return (
    <main className="bg-[var(--brand-cream)] py-12 md:py-16">
      <Container>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          Trust
        </p>
        <h1 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-4xl">
          {reviewsPageCopy.title}
        </h1>
        <p className="mb-10 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {reviewsPageCopy.description}
        </p>
        <PublishedReviews />
        <div className="mt-12 max-w-2xl">
          <h2 className="mb-3 text-lg font-bold text-[var(--brand-ink)]">
            How a note gets here
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            {reviewsPageCopy.howWeCollect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
}
