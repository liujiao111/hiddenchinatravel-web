import { RegionDestinationPage } from "@/app/_components/destinations/region-destination-page";
import { HOME_OG_IMAGE_URL, SITE_NAME } from "@/lib/constants";
import {
  getRegionDestination,
  listRegionDestinationSlugs,
} from "@/lib/destinations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return listRegionDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getRegionDestination(slug);
  if (!destination) {
    return { title: "Destination" };
  }

  const title = `${destination.seoTitle} | ${SITE_NAME}`;

  return {
    title: { absolute: title },
    description: destination.metaDescription,
    alternates: {
      canonical: destination.canonical,
    },
    openGraph: {
      title,
      description: destination.metaDescription,
      type: "website",
      url: destination.canonical,
      images: [{ url: HOME_OG_IMAGE_URL, alt: destination.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: destination.metaDescription,
      images: [HOME_OG_IMAGE_URL],
    },
  };
}

export default async function RegionDestinationRoute({ params }: Props) {
  const { slug } = await params;
  const destination = getRegionDestination(slug);
  if (!destination) notFound();

  return <RegionDestinationPage destination={destination} />;
}
