import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { HubPage } from "@/components/hubs/hub-page";
import { getHubBySlug } from "@/lib/hubs/api";
import type { Hub } from "@/lib/hubs/types";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import {
  absoluteCanonicalUrl,
  pageCanonicalPath,
} from "@/lib/seo/canonical";

export function createHubMetadata(slug: string): Metadata {
  const hub = getHubBySlug(slug);
  if (!hub) return {};

  const title = hub.seoTitle || hub.title;
  const description = hub.metaDescription;
  const canonical = pageCanonicalPath(hub.canonical || `/${hub.slug}`);

  return {
    title: { absolute: title },
    description,
    keywords: hub.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function hubJsonLd(hub: Hub) {
  const url = absoluteCanonicalUrl(hub.canonical || `/${hub.slug}`);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: hub.seoTitle || hub.title,
      description: hub.metaDescription,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: {
        "@type": "Thing",
        name: hub.title,
      },
      hasPart: hub.subtopics.flatMap((sub) =>
        sub.articles
          .filter((a) => a.status === "published")
          .map((a) => ({
            "@type": "WebPage",
            name: a.title,
            url: absoluteCanonicalUrl(a.href),
            description: a.excerpt,
          })),
      ),
    },
  ];

  if (hub.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: hub.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function HubRoutePage({ slug }: { slug: string }) {
  const hub = getHubBySlug(slug);
  if (!hub) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd(hub)) }}
      />
      <Container>
        <HubPage hub={hub} />
      </Container>
    </main>
  );
}
