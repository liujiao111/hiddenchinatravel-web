"use client";

import { SITE_EMAIL } from "@/lib/constants";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

/**
 * Renders the site email after mount so Cloudflare Email Obfuscation does not
 * inject `/cdn-cgi/l/email-protection` links into the static HTML (Semrush 404s).
 */
export function ClientEmailLink({ className }: Props) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(SITE_EMAIL);
  }, []);

  if (!email) {
    return (
      <span className={className} aria-hidden>
        &nbsp;
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
