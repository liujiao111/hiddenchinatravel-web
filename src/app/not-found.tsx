import Link from "next/link";
import Container from "@/app/_components/container";
import { SiteLogo } from "@/app/_components/site-logo";

const helpfulLinks = [
  { href: "/", label: "Home" },
  { href: "/survival-guides", label: "Survival guides" },
  { href: "/china-visa-checker", label: "China Visa Checker" },
  { href: "/tools", label: "All tools" },
  { href: "/about", label: "About" },
] as const;

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-soft),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_var(--brand-cream),_transparent_50%)]"
      />
      <Container>
        <div className="flex min-h-[70vh] flex-col justify-center py-16 md:py-24">
          <div className="mb-10">
            <SiteLogo size="sm" />
          </div>

          <p className="mb-4 text-xs font-light uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            Error 404
          </p>
          <h1 className="mb-4 max-w-2xl text-2xl font-light tracking-wide text-[var(--brand-ink)] md:text-4xl">
            This page took a wrong turn in China
          </h1>
          <p className="mb-10 max-w-xl text-sm font-light leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
            The link may be outdated, or the guide has moved. Use one of the
            paths below — or head home and start again.
          </p>

          <div className="mb-12 flex flex-wrap gap-3">
            <Link href="/" className="btn-brand px-8 py-3.5 text-[15px]">
              Back to home
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/china-visa-checker"
              className="btn-brand-outline px-8 py-3.5 text-[15px]"
            >
              Check visa rules
            </Link>
          </div>

          <div className="surface-card max-w-lg bg-[var(--brand-surface)] p-6 md:p-7">
            <p className="mb-4 text-xs font-light uppercase tracking-[0.14em] text-[var(--brand-muted)]">
              Helpful links
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-light tracking-wide text-[var(--brand-ink)] underline-offset-4 transition-colors duration-500 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
