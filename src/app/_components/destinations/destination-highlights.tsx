import Container from "@/app/_components/container";
import { DestinationPhotoSlot } from "@/app/_components/destinations/destination-photo-slot";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationHighlight } from "@/lib/destinations/types";

type Props = {
  highlights: DestinationHighlight[];
};

export function DestinationHighlights({ highlights }: Props) {
  return (
    <section
      id="highlights"
      className="scroll-mt-28 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow="On the 7-day spine"
          title="Erhai, Jade Dragon, Dali, Shuhe, Kunming — not Jinghong"
          intro="Five stops the week is actually for. Xishuangbanna sits off this line; it belongs in the 10-day add-on, not this mosaic."
        />
        <ul className="space-y-12 md:space-y-16">
          {highlights.map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <li
                key={item.id}
                id={item.id}
                className="scroll-mt-36 grid items-center gap-6 md:grid-cols-2 md:gap-10"
              >
                <div className={reverse ? "md:order-2" : undefined}>
                  <DestinationPhotoSlot
                    photo={item.photo}
                    overlayTitle={item.name}
                    overlayMeta={item.role}
                    showCopy={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={reverse ? "md:order-1" : undefined}>
                  {item.localName ? (
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                      {item.localName}
                    </p>
                  ) : null}
                  <h3 className="mt-1 font-serif text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[var(--brand-cta)]">
                    {item.role}
                  </p>
                  <p className="mt-3 max-w-md text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
