import { KitPrepCard } from "./kit-prep-card";
import type { KitPrepSectionData } from "@/lib/survival-kit/types";

type Props = {
  section: KitPrepSectionData;
};

export function KitPrepSection({ section }: Props) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-28 border-b border-[color-mix(in_srgb,var(--brand-cream-border)_40%,transparent)] pb-16 pt-10 md:pb-20 md:pt-12"
    >
      <p className="mb-3 text-[11px] font-light uppercase tracking-[0.18em] text-[var(--brand-warm)]">
        {section.eyebrow}
      </p>
      <h2
        id={`${section.id}-heading`}
        className="mb-3 max-w-2xl text-xl font-light tracking-wide text-[var(--brand-ink)] md:text-3xl"
      >
        {section.title}
      </h2>
      <p className="mb-8 max-w-2xl text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:mb-10 md:text-base">
        {section.intro}
      </p>
      <div
        className={
          section.cards.length === 1
            ? "grid max-w-xl gap-4"
            : "grid gap-4 md:grid-cols-2 md:gap-5"
        }
      >
        {section.cards.map((card) => (
          <KitPrepCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
