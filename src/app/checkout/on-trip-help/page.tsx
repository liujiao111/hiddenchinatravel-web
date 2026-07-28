import Container from "@/app/_components/container";
import { SITE_EMAIL } from "@/lib/constants";
import { onTripHelpProduct } from "@/lib/services/differentiator";
import type { Metadata } from "next";
import Link from "next/link";

const product = onTripHelpProduct;

export const metadata: Metadata = {
  title: {
    absolute: "On-Trip Quick Help Pack — Checkout | Hidden China Travel",
  },
  description:
    "Purchase a 5-question on-trip quick help pack for independent China travel. Secure checkout coming soon via Stripe.",
  alternates: {
    canonical: "/checkout/on-trip-help",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function OnTripHelpCheckoutPage() {
  return (
    <main className="bg-[var(--brand-cream)] py-12 md:py-16">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-[var(--brand-ink-muted)]">
          <Link href="/services" className="text-[var(--brand-cta)] hover:underline">
            Services
          </Link>
          <span aria-hidden> / </span>
          <span>Checkout</span>
        </nav>

        <div className="mx-auto max-w-xl rounded-2xl border-2 border-[#00897b]/15 bg-white p-6 shadow-[0_4px_20px_rgba(0,137,123,0.1)] md:p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
            Direct purchase
          </p>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-[var(--brand-cta)] md:text-3xl">
            {product.title}
          </h1>
          <p className="mb-3 text-sm font-bold text-[var(--brand-coral)]">
            {product.slogan}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-[var(--brand-ink-muted)]">
            {product.detail}
          </p>
          <p className="mb-6 text-3xl font-bold text-[var(--brand-cta)]">
            {product.priceLabel}
          </p>

          <div className="mb-6 rounded-2xl bg-[var(--brand-soft)] px-4 py-3 text-sm text-[var(--brand-cta)]">
            <p className="font-bold">Stripe Checkout coming soon</p>
            <p className="mt-1 font-normal text-[var(--brand-ink-muted)]">
              Online card checkout isn&apos;t wired yet. Email us to purchase this
              pack now — we&apos;ll send a payment link and activate your 5 credits.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent("On-Trip Quick Help pack")}&body=${encodeURIComponent("Hi — I'd like to buy the $29.9 / 5 Questions on-trip help pack.")}`}
              className="btn-brand inline-flex min-h-11 justify-center px-6 py-3 text-sm"
            >
              Email to purchase
            </a>
            <Link
              href="/services#differentiator"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#00897b]/30 px-6 py-3 text-sm font-bold text-[var(--brand-cta)] transition-colors hover:bg-[#00897b]/8"
            >
              Back to services
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
