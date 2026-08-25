import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type {
  DestinationPlaceLink,
  DestinationSectionCopy,
} from "@/lib/destinations/types";
import Link from "next/link";

type Props = {
  heading: DestinationSectionCopy;
  links: DestinationPlaceLink[];
};

export function DestinationPlaceButtons({ heading, links }: Props) {
  return (
    <section
      id="places"
      className="scroll-mt-28 bg-[var(--brand-cream)] py-12 md:py-20 lg:py-28"
    >
      <Container>
        <DestinationSectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          intro={heading.intro}
        />
        <ul className="flex flex-wrap gap-2 md:gap-3">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--brand-cta)_22%,transparent)] bg-white px-4 py-2 text-sm font-bold text-[var(--brand-cta)] transition-colors duration-300 hover:bg-[var(--brand-cta)] hover:text-white"
              >
                {link.label}
                {link.note ? (
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-80">
                    {link.note}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
