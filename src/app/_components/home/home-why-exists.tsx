import Container from "@/app/_components/container";
import Link from "next/link";

export function HomeWhyExists() {
  return (
    <section
      aria-labelledby="why-exists-heading"
      className="border-b border-[color-mix(in_srgb,var(--brand-cta)_12%,transparent)] bg-white py-14 md:py-20"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
            Our point of view
          </p>
          <h2
            id="why-exists-heading"
            className="text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-4xl"
          >
            Why Hidden China Travel Exists
          </h2>

          <div className="mx-auto mt-7 max-w-3xl space-y-2 font-serif text-2xl leading-tight text-[var(--brand-ink)] md:text-4xl">
            <p>Most travelers remember the places they visited.</p>
            <p className="font-bold">We want you to remember how those places felt.</p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-8 text-[var(--brand-ink-muted)]">
            <p>
              Joy Liu grew up in Yunnan, where mountain roads, local markets,
              old towns and family-run restaurants were simply part of everyday life.
            </p>
            <p>
              After living abroad in Japan and the Philippines, she experienced the
              other side of travel too: arriving somewhere unfamiliar and trying to
              work out what to trust, how things work, and what is actually worth your time.
            </p>
            <p>
              Hidden China Travel grew from both perspectives — local knowledge and
              the memory of what it feels like to be the visitor.
            </p>
          </div>

          <Link
            href="/about#why-i-started"
            className="btn-brand-outline mt-8 inline-flex min-h-11 items-center justify-center px-7 py-3 text-sm"
          >
            Read Our Story
          </Link>
        </div>
      </Container>
    </section>
  );
}
