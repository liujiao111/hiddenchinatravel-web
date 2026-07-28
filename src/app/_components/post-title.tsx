import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-12 text-center text-2xl font-light leading-tight tracking-wide text-[var(--brand-ink)] md:text-left md:text-4xl">
      {children}
    </h1>
  );
}
