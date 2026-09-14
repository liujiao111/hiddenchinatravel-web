import Container from "@/app/_components/container";
import { founderAssets } from "@/lib/about/founder-content";
import Image from "next/image";
import Link from "next/link";

export function HomeMeetJoy() {
  return (
    <section
      aria-labelledby="meet-joy-heading"
      className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-[var(--brand-cream)] py-14 md:py-20"
    >
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--brand-cta)]/10 bg-white shadow-[0_8px_30px_rgba(80,40,24,0.08)]">
            <Image
              src={founderAssets.portrait}
              alt="Joy Liu, founder of Hidden China Travel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Meet Joy Liu
            </p>
            <h2
              id="meet-joy-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-5xl"
            >
              Born in Yunnan.
              <br />
              Shaped by Experiences Abroad.
            </h2>

            <div className="mt-7 space-y-3 text-lg leading-8 text-[var(--brand-ink-muted)]">
              <p>Raised in Yunnan.</p>
              <p>Lived abroad in Japan and the Philippines.</p>
              <p>Founder of Hidden China Travel.</p>
            </div>

            <Link
              href="/about"
              className="btn-brand-outline mt-8 inline-flex min-h-11 items-center justify-center px-7 py-3 text-sm"
            >
              About Joy
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
