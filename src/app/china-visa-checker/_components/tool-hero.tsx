type Props = {
  title: string;
  description: string;
};

const pills = [
  "Visa-free entry",
  "240-hour transit",
  "Tourist visa guidance",
];

export function ToolHero({ title, description }: Props) {
  return (
    <section className="mb-10 md:mb-12">
      <p className="mb-4 text-xs font-light uppercase tracking-[0.18em] text-[var(--brand-muted)]">
        Travel China Guide · Entry Planning
      </p>
      <h1 className="mb-4 text-2xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-4xl">
        {title}
      </h1>
      <p className="mb-6 max-w-3xl text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
        {description}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {pills.map((pill) => (
          <span
            key={pill}
            className="inline-flex items-center gap-2 rounded-sm border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] px-3.5 py-1.5 text-sm font-light text-[var(--brand-ink)]"
          >
            <span aria-hidden className="text-[var(--brand-cta)]">
              ✓
            </span>
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
}
