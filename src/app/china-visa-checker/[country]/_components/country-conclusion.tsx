import Link from "next/link";
import type { CountryPageModel } from "@/lib/visa-checker/country-pages";

function bucketLabel(page: CountryPageModel): string {
  if (page.bucket === "visa_free") return "Visa-free short stay likely";
  if (page.bucket === "transit_240_only" && page.hasHainan30) {
    return "240-hour transit and Hainan 30-day stay";
  }
  if (page.bucket === "transit_240_only") {
    return "240-hour transit possible · mainland holiday needs a visa";
  }
  return "Visa required before travel";
}

export function CountryConclusion({ page }: { page: CountryPageModel }) {
  const { editorial, visaFree, transit240, hainan30 } = page;

  return (
    <section
      className="surface-card mb-10 bg-[var(--brand-surface)] p-6 md:mb-12 md:p-8"
      aria-labelledby="conclusion-heading"
    >
      <p className="mb-3 text-xs font-normal uppercase tracking-[0.16em] text-[var(--brand-muted)]">
        {bucketLabel(page)}
      </p>
      <h2
        id="conclusion-heading"
        className="mb-3 text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        {page.conclusionHeadline}
      </h2>
      <p className="mb-5 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {page.conclusionSummary}
      </p>
      <dl className="grid gap-3 text-sm font-normal sm:grid-cols-2">
        <div>
          <dt className="text-[var(--brand-muted)]">Passport</dt>
          <dd className="text-[var(--brand-ink)]">{editorial.displayName}</dd>
        </div>
        {visaFree ? (
          <div>
            <dt className="text-[var(--brand-muted)]">Visa-free stay</dt>
            <dd className="text-[var(--brand-ink)]">
              Up to {visaFree.maxStayDays} days ({visaFree.policyType})
            </dd>
          </div>
        ) : null}
        {hainan30 ? (
          <div>
            <dt className="text-[var(--brand-muted)]">Hainan 30-day stay</dt>
            <dd className="text-[var(--brand-ink)]">
              Up to {hainan30.maxStayDays} days inside Hainan Province only
            </dd>
          </div>
        ) : null}
        {transit240 ? (
          <div>
            <dt className="text-[var(--brand-muted)]">240-hour transit</dt>
            <dd className="text-[var(--brand-ink)]">
              Up to {transit240.maxStayHours} hours / {transit240.maxStayDays}{" "}
              days (conditions apply)
            </dd>
          </div>
        ) : (
          <div>
            <dt className="text-[var(--brand-muted)]">240-hour transit</dt>
            <dd className="text-[var(--brand-ink)]">Not on the published list</dd>
          </div>
        )}
        <div>
          <dt className="text-[var(--brand-muted)]">Policy reviewed</dt>
          <dd className="text-[var(--brand-ink)]">
            <time dateTime={editorial.lastReviewed}>
              {editorial.lastReviewed}
            </time>
          </dd>
        </div>
      </dl>
      {page.conclusionChecklist.length ? (
        <ul className="mt-6 space-y-2 border-t border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pt-5 text-sm font-normal text-[var(--brand-ink-muted)]">
          {page.conclusionChecklist.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[var(--brand-cta)]" aria-hidden>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-5 text-sm font-normal">
        <Link
          href="/china-visa-checker"
          className="text-[var(--brand-cta)] underline underline-offset-4"
        >
          Recheck with your exact trip details in the visa tool
        </Link>
      </p>
    </section>
  );
}
