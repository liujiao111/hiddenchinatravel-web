import Footer from "@/app/_components/footer";
import { ConditionalSiteChrome } from "@/app/_components/conditional-site-chrome";
import SiteHeader from "@/app/_components/site-header";
import { SiteAnalytics } from "@/components/analytics/site-analytics";
import { LocaleProvider } from "@/i18n/locale-provider";
import { defaultLocale } from "@/i18n/config";
import {
  HOME_OG_IMAGE_URL,
  SITE_FOUNDER_NAME,
  SITE_FOUNDER_PATH,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";
import {
  founderPersonJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo/jsonld";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import cn from "classnames";

import "./globals.css";

/** Same sans as Evaneos (Open Sauce One, OFL). */
const openSauceOne = localFont({
  src: [
    {
      path: "../fonts/open-sauce-one/open-sauce-one-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/open-sauce-one/open-sauce-one-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/open-sauce-one/open-sauce-one-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});

/**
 * Evaneos display face is Moret (commercial). Newsreader is the licensed
 * stand-in: a high-x-height editorial serif used at large, tight sizes.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  fallback: ["Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_FOUNDER_NAME, url: `${SITE_URL}${SITE_FOUNDER_PATH}` }],
  creator: SITE_FOUNDER_NAME,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      suppressHydrationWarning
      className={cn(openSauceOne.variable, newsreader.variable)}
    >
      <head>
        <link rel="icon" href={SITE_LOGO_PATH} type="image/webp" />
        <link rel="apple-touch-icon" href={SITE_LOGO_PATH} />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#c45c3e" />
      </head>
      <body
        className="min-h-screen bg-[var(--brand-cream)] font-sans text-[var(--brand-ink)] font-normal antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd(),
              websiteJsonLd(),
              founderPersonJsonLd(),
            ]),
          }}
        />
        <LocaleProvider>
          <ConditionalSiteChrome
            header={<SiteHeader />}
            footer={<Footer />}
          >
            {children}
          </ConditionalSiteChrome>
        </LocaleProvider>
        <SiteAnalytics />
      </body>
    </html>
  );
}
