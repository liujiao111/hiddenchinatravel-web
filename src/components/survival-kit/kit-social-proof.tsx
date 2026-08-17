import { kitTestimonials } from "@/lib/survival-kit/content";

export function KitSocialProof() {
  if (!kitTestimonials.length) return null;

  return (
    <section
      aria-labelledby="social-proof-heading"
      className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] py-16 md:py-20"
    >
      <p className="mb-3 text-[11px] font-normal uppercase tracking-[0.18em] text-[var(--brand-warm)]">
        Social proof
      </p>
      <h2
        id="social-proof-heading"
        className="mb-8 max-w-2xl text-xl font-bold tracking-wide text-[var(--brand-ink)] md:text-3xl"
      >
        What first-time visitors say
      </h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {kitTestimonials.map((item) => (
          <li
            key={item.name}
            className="surface-card border border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] bg-[var(--brand-surface)] p-6"
          >
            <p className="mb-5 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              “{item.quote}”
            </p>
            <p className="text-sm font-bold tracking-tight text-[var(--brand-ink)]">
              {item.name}
            </p>
            <p className="mt-1 text-xs font-bold tracking-tight text-[var(--brand-muted)]">
              {item.meta}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
