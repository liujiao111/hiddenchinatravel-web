import { officialSources } from "@/lib/visa-checker/form-options";

export function OfficialSources() {
  return (
    <section
      id="official-sources"
      aria-labelledby="sources-heading"
      className="mb-0 scroll-mt-28"
    >
      <div className="surface-card max-w-2xl bg-[var(--brand-surface)] p-6 md:p-8">
        <h2
          id="sources-heading"
          className="mb-6 text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-3xl"
        >
          Official Sources
        </h2>
        <ul className="divide-y divide-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)]">
          {officialSources.map((source) => (
            <li key={source.label}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-3.5 text-sm font-bold tracking-tight text-[var(--brand-ink)] transition-colors duration-500 hover:text-[var(--brand-cta)]"
              >
                <span>{source.label}</span>
                <span aria-hidden className="shrink-0 text-[var(--brand-muted)]">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
