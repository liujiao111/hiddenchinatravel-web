type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function DestinationSectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <div className="mb-8 max-w-2xl md:mb-10">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--brand-ink)] md:text-3xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
