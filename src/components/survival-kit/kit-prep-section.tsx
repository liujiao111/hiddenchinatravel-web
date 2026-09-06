import { KitPrepCard } from "./kit-prep-card";
import { KitSectionRail } from "./kit-section-rail";
import type { KitPrepSectionData } from "@/lib/survival-kit/types";

type Props = {
  section: KitPrepSectionData;
};

export function KitPrepSection({ section }: Props) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-24 border-b border-[var(--brand-border-subtle)] py-12 md:grid md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-12 md:py-16 lg:gap-16"
    >
      <KitSectionRail
        step={section.step}
        eyebrow={section.eyebrow}
        title={section.title}
        intro={section.intro}
        headingId={`${section.id}-heading`}
      />
      <div
        className={
          section.cards.length > 1
            ? "grid gap-4 lg:grid-cols-2 lg:gap-5"
            : "grid gap-4"
        }
      >
        {section.cards.map((card) => (
          <KitPrepCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
