import Link from "next/link";
import {
  countryPagePath,
  getCountryEditorialBySlug,
  type CountryPageModel,
} from "@/lib/visa-checker/country-pages";

export function CountryRoutesAndLinks({ page }: { page: CountryPageModel }) {
  const related = page.relatedSlugs
    .map((slug) => getCountryEditorialBySlug(slug))
    .filter(Boolean);

  return (
    <section className="mb-10 space-y-8 md:mb-12">
      <div>
        <h2 className="mb-3 text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-2xl">
          Common entry routes
        </h2>
        <p className="mb-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {page.editorial.commonRoutes}
        </p>
        <p className="text-sm font-normal text-[var(--brand-ink-muted)]">
          For trains, metros, and booking tips after you land, see the{" "}
          <Link
            href="/transport-in-china"
            className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
          >
            Transport in China hub
          </Link>
          . For Alipay and WeChat Pay setup, start with{" "}
          <Link
            href="/payments-in-china"
            className="underline underline-offset-4 hover:text-[var(--brand-cta)]"
          >
            Payments in China
          </Link>
          .
        </p>
      </div>

      <div className="surface-card bg-[var(--brand-soft)] p-5 md:p-6">
        <h2 className="mb-3 text-base font-bold tracking-tight text-[var(--brand-ink)]">
          Related guides
        </h2>
        <ul className="space-y-2 text-sm font-normal">
          <li>
            <Link
              href="/china-visa-checker"
              className="text-[var(--brand-cta)] underline underline-offset-4"
            >
              China Visa Checker (interactive)
            </Link>
          </li>
          <li>
            <Link
              href="/do-i-need-a-visa-for-china"
              className="text-[var(--brand-cta)] underline underline-offset-4"
            >
              Do I need a visa for China?
            </Link>
          </li>
          <li>
            <Link
              href="/china-visa-free-countries-2026"
              className="text-[var(--brand-cta)] underline underline-offset-4"
            >
              China visa-free countries 2026
            </Link>
          </li>
        </ul>
      </div>

      {related.length ? (
        <div>
          <h2 className="mb-3 text-base font-bold tracking-tight text-[var(--brand-ink)]">
            Similar passport policies
          </h2>
          <ul className="flex flex-wrap gap-2">
            {related.map((item) =>
              item ? (
                <li key={item.slug}>
                  <Link
                    href={countryPagePath(item.slug)}
                    className="inline-flex rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] bg-[var(--brand-surface)] px-3 py-1.5 text-sm font-normal text-[var(--brand-ink)] transition-colors hover:border-[var(--brand-cta)]"
                  >
                    {item.displayName}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
