import Footer from "@/app/_components/footer";
import { DeparturePrepRail } from "@/components/action-rail";
import { ConditionalSiteChrome } from "@/app/_components/conditional-site-chrome";
import SiteHeader from "@/app/_components/site-header";
import { LocaleProvider } from "@/i18n/locale-provider";
import { defaultLocale } from "@/i18n/config";
import {
  HOME_OG_IMAGE_URL,
  SITE_EMAIL,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  socialLinks,
} from "@/lib/constants";
import { getSearchIndex } from "@/lib/search/build-index";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_TAGLINE,
    url: "/",
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
    images: [HOME_OG_IMAGE_URL],
  },
  icons: {
    icon: [{ url: SITE_LOGO_PATH }],
    apple: [{ url: SITE_LOGO_PATH }],
  },
};

function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO_PATH}`,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kunming",
      addressRegion: "Yunnan",
      addressCountry: "CN",
    },
    description: SITE_TAGLINE,
    sameAs: socialLinks.map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  };
}

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <link rel="icon" href={SITE_LOGO_PATH} type="image/webp" />
        <link rel="apple-touch-icon" href={SITE_LOGO_PATH} />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#f5f2ed" />
      </head>
      <body
        className={cn(
          outfit.variable,
          outfit.className,
          "min-h-screen bg-[var(--brand-cream)] text-[var(--brand-ink)] font-light antialiased",
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        <LocaleProvider>
          <ConditionalSiteChrome
            header={<SiteHeader searchItems={getSearchIndex()} />}
            footer={
              <>
                <Footer />
                <DeparturePrepRail />
              </>
            }
          >
            <div className="min-h-screen">{children}</div>
          </ConditionalSiteChrome>
        </LocaleProvider>
      </body>
    </html>
  );
}
