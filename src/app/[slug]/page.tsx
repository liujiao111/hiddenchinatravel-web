import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import type { Post } from "@/interfaces/post";

export default async function PostPage(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

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
            author={post.author}
          />
          <PostBody
            content={content}
            articleSlug={post.slug}
            section={post.section}
            keywords={post.keywords}
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
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

function articleJsonLd(post: Post) {
  const url = absoluteUrl(`/${post.slug}`);
  const image = absoluteUrl(post.ogImage?.url || post.coverImage);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [image],
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Person",
      name: post.author?.name || SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    ...(post.keywords?.length ? { keywords: post.keywords.join(", ") } : {}),
    ...(post.section ? { articleSection: post.section } : {}),
  };
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const canonicalPath = `/${post.slug}`;
  const ogImage = absoluteUrl(post.ogImage?.url || post.coverImage);

  return {
    // Layout already applies `%s | ${SITE_NAME}` — pass bare title only.
    title: post.title,
    description: post.excerpt,
    authors: post.author?.name ? [{ name: post.author.name }] : undefined,
    keywords: post.keywords?.length ? post.keywords : undefined,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: SITE_NAME,
      title: post.title,
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
      title: post.title,
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
