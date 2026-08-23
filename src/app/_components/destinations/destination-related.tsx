import Container from "@/app/_components/container";
import { DestinationSectionHeading } from "@/app/_components/destinations/destination-section-heading";
import type { DestinationRelatedLink, DestinationSectionCopy } from "@/lib/destinations/types";
import Link from "next/link";

type Props = {
  links: DestinationRelatedLink[];
  heading: DestinationSectionCopy;
};

export function DestinationRelated({ links, heading }: Props) {
  return (
    <section className="border-t border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-12 md:py-20">
      <Container>
        <DestinationSectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="surface-card flex h-full flex-col p-5 transition-colors duration-300 hover:border-[var(--brand-cta)]"
              >
                <h3 className="font-sans text-base font-bold text-[var(--brand-ink)]">
                  {link.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {link.excerpt}
                </p>
                <span className="surface-card-cta mt-4">
                  Open
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
