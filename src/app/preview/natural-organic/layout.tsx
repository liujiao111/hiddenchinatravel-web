import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import cn from "classnames";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-organic-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-organic-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "Natural Organic preview — Hidden China Travel",
  },
  robots: { index: false, follow: false },
};

export default function NaturalOrganicPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        fraunces.variable,
        sourceSans.variable,
        "min-h-screen bg-[#f3efe8] text-stone-800 antialiased",
        "font-[family-name:var(--font-organic-sans)]",
      )}
    >
      {children}
    </div>
  );
}
