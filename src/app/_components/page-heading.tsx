import { LastUpdated } from "@/app/_components/last-updated";

type Props = {
  title: string;
  description?: string;
  /** ISO date shown under the description */
  lastUpdated?: string;
};

export function PageHeading({ title, description, lastUpdated }: Props) {
  return (
    <section className="mb-12 mt-8 md:mb-16 md:mt-10">
      <h1 className="mb-4 max-w-3xl font-serif text-2xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:mb-5 md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-sm font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-base">
          {description}
        </p>
      ) : null}
      {lastUpdated ? (
        <LastUpdated date={lastUpdated} className="mt-4" />
      ) : null}
    </section>
  );
}
