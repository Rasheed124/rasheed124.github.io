import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/ui/PageHeader";
import BlockRenderer from "@/components/BlockRenderer";
import { PageDocument } from "@/types/blocks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { pageBySlugQuery } from "@/lib/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const page = await sanityFetch<PageDocument | null>({
    query: pageBySlugQuery,
    params: { slug },
    tags: ["page", `page:${slug}`],
  });

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
    },
  };
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const page = await sanityFetch<PageDocument | null>({
    query: pageBySlugQuery,
    params: { slug },
    tags: ["page", `page:${slug}`],
  });

  if (!page) {
    notFound();
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      <PageHeader title={page.title} description={page.description} />
      {page.blocks && <BlockRenderer blocks={page.blocks} />}
    </section>
  );
}