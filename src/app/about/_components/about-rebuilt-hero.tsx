import { founderAssets } from "@/lib/about/founder-content";
import Image from "next/image";

export function AboutRebuiltHero() {
  return (
    <section className="grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-16">
      <div className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">About Hidden China Travel</p>
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-5xl">Born in Yunnan. Shaped by Experiences Abroad.</h1>
        <div className="space-y-5 text-[15px] leading-8 text-[var(--brand-ink-muted)] md:text-base">
          <p>I&apos;m Jiao. I was born and raised in Yunnan, in southwest China.</p>
          <p>For most of my life, the places travelers now travel thousands of miles to visit were simply part of everyday life: local markets, mountain roads, village festivals, small family restaurants, and old towns along the Tea Horse Road.</p>
          <p>Back then, I never imagined people would travel from around the world to experience what I considered ordinary.</p>
          <p>That changed when I moved abroad.</p>
          <p>For the first time in my life, I became the foreigner. And everything that once felt simple suddenly became complicated.</p>
          <div className="space-y-1 font-medium text-[var(--brand-ink)]"><p>How do people get around?</p><p>Which neighborhoods are actually worth visiting?</p><p>What customs should I know?</p><p>What mistakes should I avoid?</p></div>
          <p>I quickly learned that having someone local you trust can transform an entire trip.</p>
          <p>Not because they help you see more. But because they help you feel comfortable enough to truly experience a place.</p>
          <p>That experience eventually became the foundation of Hidden China Travel.</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--brand-cta)]/10 shadow-sm">
          <Image src={founderAssets.portrait} alt="Jiao, founder of Hidden China Travel" fill priority className="object-cover" sizes="360px" />
        </div>
        <p className="mt-4 text-center text-sm text-[var(--brand-ink-muted)]">Jiao · Yunnan, China</p>
      </div>
    </section>
  );
}
