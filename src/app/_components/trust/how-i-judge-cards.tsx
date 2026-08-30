import { TropicalCard, tropicalAccentAt } from "@/app/_components/tropical-card";
import type { HowIJudgeCard } from "@/lib/about/founder-content";

export function HowIJudgeCards({ cards }: { cards: readonly HowIJudgeCard[] }) {
  return (
    <ul className="!max-w-none grid gap-4 sm:grid-cols-2 md:gap-5">
      {cards.map((card, index) => (
        <li key={card.id}>
          <TropicalCard
            accent={tropicalAccentAt(index)}
            label="How I judge"
            title={card.title}
            bodyLines={0}
          >
            <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              {card.body}
            </p>
          </TropicalCard>
        </li>
      ))}
    </ul>
  );
}
