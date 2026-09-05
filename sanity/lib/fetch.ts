import { draftMode } from "next/headers";
import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T> {
  const { isEnabled: isDraftMode } = await draftMode();

  if (isDraftMode) {
    return client
      .withConfig({
        token: process.env.SANITY_API_READ_TOKEN,
        useCdn: false,
        perspective: "previewDrafts",
        stega: {
          enabled: true,
          studioUrl: "/admin",
        },
      })
      .fetch<T>(query, params);
  }

  return client
    .withConfig({
      useCdn: false,
    })
    .fetch<T>(query, params, {
      next: {
        tags,
        // Revalidate every 60s as a fallback in case webhooks delay
        revalidate: process.env.NODE_ENV === "development" ? 0 : 60,
      },
    });
}