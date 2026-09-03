import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { SITE_FOUNDER_PATH, SITE_LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/constants";
import { articleAuthorJsonLd } from "@/lib/seo/jsonld";
import {
  getRelatedPosts,
  resolveArticleHub,
} from "@/lib/content/article-related";
import {
  absoluteCanonicalUrl,
  pageCanonicalPath,
} from "@/lib/seo/canonical";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { EsimPlanDecision } from "@/components/affiliates/esim-plan-decision";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import type { Post } from "@/interfaces/post";

/** ISR so a brand-new slug is not frozen as a year-long cached 404. */
export const revalidate = 3600;
export const dynamicParams = true;

export default async function PostPage(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const hub = resolveArticleHub(post.section);
  const relatedPosts = getRelatedPosts(post, getAllPosts(), 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    coverImage: p.coverImage,
  }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)),
        }}
      />
      <Container>
        <article className="mb-32 mt-8">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            dateModified={post.dateModified}
            author={post.author}
            articleSlug={post.slug}
          />
          {post.slug === "best-esim-for-china-travel" ? (
            <EsimPlanDecision />
          ) : null}
          <PostBody
            content={content}
            articleSlug={post.slug}
            section={post.section}
            keywords={post.keywords}
            hub={hub}
            relatedPosts={relatedPosts}
          />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pageCanonicalPath(pathOrUrl);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

function articleJsonLd(post: Post) {
  const url = absoluteCanonicalUrl(post.canonical || `/${post.slug}`);
  const image = absoluteUrl(post.ogImage?.url || post.coverImage);
  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: [image],
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: articleAuthorJsonLd({
      name: post.author?.name,
      picture: post.author?.picture,
    }),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${SITE_LOGO_PATH}`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    ...(post.keywords?.length ? { keywords: post.keywords.join(", ") } : {}),
    ...(post.section ? { articleSection: post.section } : {}),
  };

  const faqs = (post.faqs ?? []).filter(
    (f) => f.question?.trim() && f.answer?.trim(),
  );
  if (!faqs.length) {
    return { "@context": "https://schema.org", ...article };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      article,
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question.trim(),
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.trim(),
          },
        })),
      },
    ],
  };
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const canonicalPath = pageCanonicalPath(post.canonical || `/${post.slug}`);
  const ogImage = absoluteUrl(post.ogImage?.url || post.coverImage);
  const metaTitle = post.seoTitle?.trim() || post.title;

  return {
    // seoTitle → absolute (no brand suffix). Plain title keeps layout template.
    title: post.seoTitle?.trim()
      ? { absolute: metaTitle }
      : post.title,
    description: post.excerpt,
    authors: post.author?.name
      ? [{ name: post.author.name, url: `${SITE_URL}${SITE_FOUNDER_PATH}` }]
      : undefined,
    keywords: post.keywords?.length ? post.keywords : undefined,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: SITE_NAME,
      title: metaTitle,
      description: post.excerpt,
      url: canonicalPath,
      images: [{ url: ogImage, alt: post.title }],
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: post.author?.name ? [post.author.name] : undefined,
      section: post.section,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
