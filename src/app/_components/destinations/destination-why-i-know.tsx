import Container from "@/app/_components/container";
import type { DestinationWhyIKnow } from "@/lib/destinations/types";
import Image from "next/image";
import Link from "next/link";

export function DestinationWhyIKnow({ block }: { block: DestinationWhyIKnow }) {
  return (
    <section
      id="why-i-know"
      aria-labelledby="why-i-know-heading"
      className="scroll-mt-28 border-b border-[color-mix(in_srgb,var(--brand-cta)_10%,transparent)] bg-[var(--brand-cream)] py-12 md:py-16"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              {block.eyebrow}
            </p>
            <h2
              id="why-i-know-heading"
              className="mb-4 text-xl font-bold tracking-tight text-[var(--brand-ink)] md:text-2xl"
            >
              {block.title}
            </h2>
            <div className="space-y-4 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            {block.founderHref ? (
              <Link
                href={block.founderHref}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_40%,transparent)] underline-offset-[5px]"
              >
                Meet the founder
                <span aria-hidden>→</span>
              </Link>
            ) : null}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[var(--brand-cta)]/15 shadow-[0_4px_20px_rgba(80,40,24,0.08)]">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              quality={85}
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
