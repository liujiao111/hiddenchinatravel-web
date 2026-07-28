import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import cn from "classnames";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-scandi",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    absolute: "Scandinavian preview — Hidden China Travel",
  },
  robots: { index: false, follow: false },
};

export default function ScandinavianPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        outfit.variable,
        "min-h-screen bg-[#f5f2ed] text-[#333333] antialiased",
        "font-[family-name:var(--font-scandi)] font-light",
      )}
    >
      {children}
    </div>
  );
}
