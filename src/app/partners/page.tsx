import Container from "@/app/_components/container";
import { partnersPageCopy } from "@/lib/partners/content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Planner partnerships — Hidden China Travel" },
  description: partnersPageCopy.description,
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <main className="bg-[var(--brand-cream)] py-12 md:py-16">
      <Container>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          Partnerships
        </p>
        <h1 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-[var(--brand-cta)] md:text-4xl">
          {partnersPageCopy.title}
        </h1>
        <p className="mb-10 max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {partnersPageCopy.description}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            partnersPageCopy.who,
            partnersPageCopy.notFor,
            partnersPageCopy.offer,
          ].map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-[color-mix(in_srgb,var(--brand-cta)_15%,transparent)] bg-white p-5"
            >
              <h2 className="mb-3 text-base font-bold text-[var(--brand-cta)]">
                {block.title}
              </h2>
              <ul className="space-y-2 text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)]">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href={partnersPageCopy.cta.href}
          className="btn-brand mt-10 inline-flex min-h-12 px-6 py-3 text-sm"
        >
          {partnersPageCopy.cta.label}
        </Link>
        <p className="mt-3 max-w-xl text-xs font-normal text-[var(--brand-ink-muted)]">
          {partnersPageCopy.cta.note}
        </p>
      </Container>
    </main>
  );
}
