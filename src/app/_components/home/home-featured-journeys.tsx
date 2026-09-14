import Container from "@/app/_components/container";
import Image from "next/image";
import Link from "next/link";

type FeaturedJourney = {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  imageAlt: string;
  price: string;
  meta: string[];
  highlights: string[];
  cta: string;
};

const featuredJourneys: FeaturedJourney[] = [
  {
    title: "Start with Yunnan",
    subtitle: "Our signature journey through Dali, Shaxi and Lijiang.",
    href: "/journeys/dali-shaxi-lijiang-tour",
    image: "/brand/destinations/yunnan/hero-erhai.webp",
    imageAlt: "Erhai Lake and the mountains near Dali, Yunnan",
    price: "From ¥2,700 per person",
    meta: ["6 days", "Dali · Shaxi · Lijiang", "Private journey", "Unhurried pace"],
    highlights: [
      "Slow mornings beside Erhai Lake",
      "Bai culture and a traditional tie-dye workshop",
      "An evening in Shaxi on the Ancient Tea Horse Road",
      "Lijiang old-town life and mountain landscapes",
    ],
    cta: "Explore this journey",
  },
];

export function HomeFeaturedJourneys() {
  return (
    <section className="bg-[var(--brand-cream)] py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-3xl md:mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
              Featured Journey
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Start with Yunnan
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--brand-ink-muted)] md:text-lg">
              Our signature journey through Dali, Shaxi and Lijiang.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredJourneys.map((journey) => (
              <Link
                key={journey.href}
                href={journey.href}
                className="group overflow-hidden rounded-[2rem] border border-[var(--brand-cta)]/10 bg-white shadow-[0_10px_40px_rgba(80,40,24,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(80,40,24,0.13)] lg:col-span-2"
                aria-label={`${journey.title}: ${journey.subtitle}`}
              >
                <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                  <div className="relative min-h-[280px] overflow-hidden md:min-h-[360px] lg:min-h-[470px]">
                    <Image
                      src={journey.image}
                      alt={journey.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col p-7 md:p-10 lg:p-12">
                    <div className="flex flex-wrap gap-2">
                      {journey.meta.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--brand-cta)]/12 bg-[var(--brand-soft)] px-3 py-1.5 text-xs font-medium text-[var(--brand-ink-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-6 text-3xl font-bold tracking-tight text-[var(--brand-ink)] md:text-4xl">
                      {journey.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--brand-ink-muted)] md:text-lg">
                      {journey.subtitle}
                    </p>

                    <p className="mt-6 text-xl font-bold text-[var(--brand-ink)]">
                      {journey.price}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {journey.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-[var(--brand-ink-muted)] md:text-base"
                        >
                          <span className="font-bold text-[var(--brand-coral)]" aria-hidden>
                            ✓
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex items-center gap-2 font-bold text-[var(--brand-cta)]">
                      <span>{journey.cta}</span>
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
