import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationAddons } from "@/lib/destinations/types";
import cn from "classnames";

type Props = {
  addons: DestinationAddons;
};

export function DestinationAddonsSection({ addons }: Props) {
  return (
    <section
      id="addon"
      className="scroll-mt-28 bg-white py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={addons.eyebrow}
          title={addons.title}
          intro={addons.intro}
        />
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {addons.items.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className={cn(
                "scroll-mt-36 rounded-2xl border bg-[var(--brand-cream)] p-5 md:p-6",
                item.onLine
                  ? "border-[color-mix(in_srgb,var(--brand-cta)_28%,transparent)]"
                  : "border-dashed border-[color-mix(in_srgb,var(--brand-cta)_35%,transparent)]",
              )}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                {item.badge}
              </p>
              {item.localName ? (
                <p className="mt-2 text-xs font-bold text-[var(--brand-ink-muted)]">
                  {item.localName}
                </p>
              ) : null}
              <h3 className="mt-1 font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
                {item.name}
              </h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
