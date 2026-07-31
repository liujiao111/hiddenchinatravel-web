import Link from "next/link";
import {
  countryPagePath,
  getCountryPagesGrouped,
} from "@/lib/visa-checker/country-pages";

export function CountryBrowseList({
  heading = "Browse China visa rules by nationality",
}: {
  heading?: string;
}) {
  const groups = getCountryPagesGrouped();

  const sections = [
    {
      id: "visa-free",
      title: "Visa-free short stay",
      items: groups.visaFree,
    },
    {
      id: "transit-240",
      title: "240-hour transit (visa usually required for holidays)",
      items: groups.transit240Only,
    },
    {
      id: "visa-required",
      title: "Visa required",
      items: groups.visaRequired,
    },
  ] as const;

  return (
    <section
      className="mb-16 md:mb-20"
      aria-labelledby="browse-nationality-heading"
    >
      <h2
        id="browse-nationality-heading"
        className="mb-3 text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        {heading}
      </h2>
      <p className="mb-8 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        Open a country page for a clear yes/no-style answer, then use the form
        above if your trip has transit stops, longer stays, or special purposes.
      </p>
      <div className="space-y-8">
        {sections.map((section) =>
          section.items.length ? (
            <div key={section.id}>
              <h3 className="mb-3 text-sm font-normal uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                {section.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={countryPagePath(item.slug)}
                      className="inline-flex rounded-2xl border border-[color-mix(in_srgb,var(--brand-cream-border)_45%,transparent)] bg-[var(--brand-surface)] px-3 py-1.5 text-sm font-normal text-[var(--brand-ink)] transition-colors hover:border-[var(--brand-cta)] hover:text-[var(--brand-cta)]"
                    >
                      {item.displayName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}
