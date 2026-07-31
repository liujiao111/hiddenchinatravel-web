import { KitQuickNav } from "./kit-quick-nav";
import { kitHero, kitQuickNav } from "@/lib/survival-kit/content";

export function KitHero() {
  return (
    <header className="border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pb-8 md:pb-10">
      <p className="mb-4 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--brand-muted)]">
        {kitHero.eyebrow}
      </p>
      <h1 className="mb-5 max-w-3xl text-2xl font-bold leading-tight tracking-wide text-[var(--brand-ink)] md:text-4xl">
        {kitHero.title}
      </h1>
      <p className="mb-6 max-w-2xl text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
        {kitHero.subtitle}
      </p>
      <ul className="mb-8 max-w-2xl space-y-2.5 text-left md:mb-9">
        {kitHero.painPoints.map((point) => (
          <li
            key={point}
            className="flex gap-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base"
          >
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-2xl bg-[var(--brand-cta)]"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <KitQuickNav items={kitQuickNav} />
    </header>
  );
}
