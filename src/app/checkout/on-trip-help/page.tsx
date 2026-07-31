import Container from "@/app/_components/container";
import { SITE_EMAIL } from "@/lib/constants";
import { onTripHelpProduct } from "@/lib/services/differentiator";
import { getWhatsAppHref } from "@/lib/whatsapp";
import type { Metadata } from "next";
import Link from "next/link";

const product = onTripHelpProduct;

const mailtoHref = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
  "On-Trip Quick Help pack",
)}&body=${encodeURIComponent(
  "Hi — I'd like to buy the On-Trip Quick Help pack ($29.90 / 5 questions).",
)}`;

export const metadata: Metadata = {
  title: {
    absolute: "On-Trip Quick Help Pack — Request | Hidden China Travel",
  },
  description:
    "Request the 5-question on-trip quick help pack for independent China travel. Email or WhatsApp to purchase.",
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
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-xs font-bold text-[var(--brand-ink-muted)]"
        >
          <Link
            href="/services"
            className="text-[var(--brand-cta)] hover:underline"
          >
            Services
          </Link>
          <span aria-hidden> / </span>
          <span>Request purchase</span>
        </nav>

        <div className="mx-auto max-w-xl rounded-2xl border-2 border-[#00897b]/15 bg-white p-6 shadow-[0_4px_20px_rgba(0,137,123,0.1)] md:p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-mango)]">
            Request to purchase
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
            $29.90 / 5 Questions
          </p>

          <div className="mb-6 rounded-2xl bg-[var(--brand-soft)] px-4 py-3 text-sm text-[var(--brand-cta)]">
            <p className="font-bold">How purchase works</p>
            <p className="mt-1 font-normal text-[var(--brand-ink-muted)]">
              Message us by email or WhatsApp. We&apos;ll confirm the pack, send
              a payment link, and activate your 5 credits — usually within one
              business day.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={mailtoHref}
              className="btn-brand inline-flex min-h-11 justify-center px-6 py-3 text-sm"
            >
              Email to purchase
            </a>
            <a
              href={getWhatsAppHref(
                "Hi — I'd like to buy the On-Trip Quick Help pack ($29.90 / 5 questions).",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#00897b]/30 px-6 py-3 text-sm font-bold text-[var(--brand-cta)] transition-colors hover:bg-[#00897b]/8"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-[var(--brand-ink-muted)]">
            <Link
              href="/services#differentiator"
              className="font-bold text-[var(--brand-cta)] underline-offset-2 hover:underline"
            >
              ← Back to services
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
