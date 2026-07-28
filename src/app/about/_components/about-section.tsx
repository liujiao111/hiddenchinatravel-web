import type { ReactNode } from "react";
import cn from "classnames";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function AboutSection({
  id,
  eyebrow,
  title,
  children,
  className,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={cn("mb-16 scroll-mt-32 md:mb-20", className)}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-mango)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id ? `${id}-heading` : undefined}
        className="mb-6 text-xl font-bold leading-tight tracking-tight text-[var(--brand-cta)] md:text-3xl"
      >
        {title}
      </h2>
      <div className="max-w-3xl space-y-5 text-base font-normal leading-relaxed text-[var(--brand-ink-muted)] md:text-lg">
        {children}
      </div>
    </section>
  );
}
