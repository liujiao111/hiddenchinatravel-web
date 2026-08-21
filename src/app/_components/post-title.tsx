import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-12 text-center font-serif text-2xl font-bold leading-tight tracking-tight text-[var(--brand-ink)] md:text-left md:text-4xl">
      {children}
    </h1>
  );
}
