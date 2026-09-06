import Image from "next/image";
import Container from "@/app/_components/container";
import { KitQuickNav } from "./kit-quick-nav";
import { kitDayOne, kitHero, kitQuickNav } from "@/lib/survival-kit/content";

export function KitHero() {
  return (
    <header>
      <section className="relative isolate flex min-h-[24rem] items-end overflow-hidden bg-[var(--brand-ink)] md:min-h-[32rem]">
        <Image
          src={kitHero.image.src}
          alt={kitHero.image.alt}
          fill
          priority
          fetchPriority="high"
          quality={78}
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(16,12,10,0.92)] via-[rgba(16,12,10,0.72)] to-[rgba(16,12,10,0.28)]"
        />
        <div className="relative w-full pb-10 pt-24 md:pb-14 md:pt-32">
          <Container>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              {kitHero.eyebrow}
            </p>
            <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              {kitHero.title}
            </h1>
            <p className="mb-7 max-w-2xl text-base font-normal leading-relaxed text-white/85 md:text-lg">
              {kitHero.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <a href={kitHero.primaryCta.href} className="btn-brand text-sm">
                {kitHero.primaryCta.label}
              </a>
              <a
                href={kitHero.secondaryCta.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/35 px-5 py-3 text-sm font-bold tracking-tight text-white transition-colors duration-300 hover:bg-white/10"
              >
                {kitHero.secondaryCta.label}
                <span aria-hidden>↓</span>
              </a>
            </div>
          </Container>
        </div>
      </section>

      <section className="border-b border-[var(--brand-border-subtle)] bg-white py-10 md:py-14">
        <Container>
          <h2 className="mb-6 max-w-2xl text-lg font-bold leading-snug text-[var(--brand-ink)] md:mb-8 md:text-2xl">
            {kitDayOne.title}
          </h2>
          <ul className="grid gap-6 md:grid-cols-3 md:gap-10">
            {kitDayOne.items.map((item) => (
              <li key={item.title}>
                <p className="mb-1.5 text-sm font-bold tracking-tight text-[var(--brand-ink)] md:text-base">
                  {item.title}
                </p>
                <p className="text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container>
        <div className="py-8 md:py-10">
          <KitQuickNav items={kitQuickNav} />
        </div>
      </Container>
    </header>
  );
}
