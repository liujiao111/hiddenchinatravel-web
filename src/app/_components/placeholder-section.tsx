type Props = {
  children: React.ReactNode;
};

export function PlaceholderSection({ children }: Props) {
  return (
    <section className="mb-32 max-w-3xl space-y-6 text-base font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
      {children}
    </section>
  );
}
