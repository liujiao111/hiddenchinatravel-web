type Props = {
  step: string;
  eyebrow: string;
  title: string;
  intro: string;
  headingId: string;
};

/** Left column of a kit section: step number, title, and the framing sentence. */
export function KitSectionRail({
  step,
  eyebrow,
  title,
  intro,
  headingId,
}: Props) {
  return (
    <div className="mb-8 md:sticky md:top-24 md:mb-0 md:self-start">
      <div className="mb-3 flex items-baseline gap-3">
        <span
          aria-hidden
          className="font-serif text-2xl font-bold leading-none text-[color-mix(in_srgb,var(--brand-cta)_40%,transparent)] md:text-3xl"
        >
          {step}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          {eyebrow}
        </span>
      </div>
      <h2
        id={headingId}
        className="mb-3 text-xl font-bold leading-tight text-[var(--brand-ink)] md:text-2xl"
      >
        {title}
      </h2>
      <p className="max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
        {intro}
      </p>
    </div>
  );
}
