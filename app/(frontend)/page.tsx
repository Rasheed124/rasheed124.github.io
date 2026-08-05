import { Metadata } from "next";
import { notFound } from "next/navigation";

import BlockRenderer from "@/components/BlockRenderer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { HOME_QUERY } from "@/lib/queries";
import { HomePageData } from "@/types/homePage";

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await sanityFetch<HomePageData | null>({
    query: HOME_QUERY,
    tags: ["page", "home"],
  });

  if (!homeData) return {};

  return {
    title: homeData.title,
    description: homeData.description,
    openGraph: {
      title: homeData.title,
      description: homeData.description,
      images: homeData.ogImageUrl ? [{ url: homeData.ogImageUrl }] : [],
    },
  };
}

export default async function HomePage() {
  const homeData = await sanityFetch<HomePageData | null>({
    query: HOME_QUERY,
    tags: ["page", "home"],
  });

  if (!homeData) {
    notFound();
  }

  return (
    <main className="w-full">
      <BlockRenderer blocks={homeData.blocks} />
    </main>
  );
}