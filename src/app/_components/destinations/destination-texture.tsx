import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { RegionDestination } from "@/lib/destinations/types";

type Props = {
  texture: NonNullable<RegionDestination["texture"]>;
};

export function DestinationTexture({ texture }: Props) {
  return (
    <section
      id="texture"
      className="scroll-mt-28 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={texture.eyebrow}
          title={texture.title}
          intro={texture.intro}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {texture.notes.map((note) => (
            <li
              key={note.id}
              id={note.id}
              className="surface-card h-full scroll-mt-28 p-5"
            >
              {note.localName ? (
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
                  {note.localName}
                </p>
              ) : null}
              <h3 className="mt-1 font-serif text-lg font-bold tracking-tight text-[var(--brand-ink)]">
                {note.name}
              </h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                {note.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
