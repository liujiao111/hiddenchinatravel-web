import type { CountryPageModel } from "@/lib/visa-checker/country-pages";

export function CountryNotes({ page }: { page: CountryPageModel }) {
  const { editorial, bucket, transitResult, transit240 } = page;

  return (
    <section className="mb-10 md:mb-12" aria-labelledby="notes-heading">
      <h2
        id="notes-heading"
        className="mb-4 text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-2xl"
      >
        What {editorial.demonym} should know
      </h2>
      <ul className="mb-8 space-y-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {editorial.uniqueNotes.map((note) => (
          <li
            key={note}
            className="surface-card bg-[var(--brand-soft)] px-4 py-3 md:px-5"
          >
            {note}
          </li>
        ))}
      </ul>

      {bucket === "transit_240_only" && transit240 ? (
        <div className="surface-card bg-[var(--brand-surface)] p-5 md:p-6">
          <h3 className="mb-2 text-base font-bold tracking-tight text-[var(--brand-ink)]">
            If you qualify for 240-hour transit
          </h3>
          <p className="mb-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
            {transitResult?.summary ??
              `${editorial.displayName} passports can use China’s ${transit240.maxStayHours}-hour transit visa-free path when conditions are met.`}
          </p>
          <ul className="space-y-2 text-sm font-normal text-[var(--brand-ink-muted)]">
            <li>Confirmed onward ticket to a third country or region</li>
            <li>Enter through an eligible 240-hour port</li>
            <li>
              Leave within {transit240.maxStayHours} hours and stay inside the
              allowed region for that port
            </li>
          </ul>
        </div>
      ) : null}

      {bucket === "visa_free" && page.hasTransit240 ? (
        <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
          {editorial.displayName} is also on the 240-hour transit list. Most
          short holidays use the visa-free stay instead; use transit rules only
          when you are connecting to a third country.
        </p>
      ) : null}
    </section>
  );
}
