import Container from "@/app/_components/container";
import { homeWhyExists } from "@/lib/about/founder-content";
import Image from "next/image";
import Link from "next/link";

export function HomeWhyExists() {
  return (
    <section
      aria-labelledby="why-exists-heading"
      className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white py-10 md:py-12"
    >
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,280px)] md:gap-10 lg:gap-14">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              {homeWhyExists.eyebrow}
            </p>
            <div
              id="why-exists-heading"
              className="space-y-2 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg"
            >
              {homeWhyExists.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <Link
              href={homeWhyExists.ctaHref}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-cta)] underline decoration-[color-mix(in_srgb,var(--brand-cta)_40%,transparent)] underline-offset-[5px] transition-colors duration-300 hover:text-[var(--brand-cta-hover)]"
            >
              {homeWhyExists.ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-[var(--brand-cta)]/15 bg-[var(--brand-soft)] shadow-[0_4px_20px_rgba(80,40,24,0.08)]">
            <Image
              src={homeWhyExists.image.src}
              alt={homeWhyExists.image.alt}
              width={homeWhyExists.image.width}
              height={homeWhyExists.image.height}
              sizes="(max-width: 768px) 100vw, 280px"
              quality={88}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
