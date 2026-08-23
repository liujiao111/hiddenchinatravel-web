"use client";

import { useState } from "react";

type Props = {
  keywords: string;
};

export function CopySearchButton({ keywords }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(keywords);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="mt-2 rounded-full border border-[color-mix(in_srgb,var(--brand-cta)_22%,transparent)] bg-white/80 px-3 py-1 text-[11px] font-bold tracking-tight text-[var(--brand-cta)] transition-all duration-300 hover:border-[var(--brand-cta)]"
    >
      {copied ? "Copied" : "Copy search"}
    </button>
  );
}
