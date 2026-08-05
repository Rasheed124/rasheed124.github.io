// // import { client } from "@/sanity/lib/client"

// // export async function sanityFetch<T>({
// //   query,
// //   params = {},
// //   tags = [],
// // }: {
// //   query: string
// //   params?: Record<string, unknown>
// //   tags?: string[]
// // }): Promise<T> {
// //   return client.fetch<T>(query, params, {
// //     next: {
// //       revalidate: 60, // Revalidate every 60 seconds (or 0 for draft preview mode)
// //       tags,
// //     },
// //   })
// // }

// // sanity/lib/fetch.ts
// import { client } from "@/sanity/lib/client";
// import type { QueryParams } from "next-sanity";

// /**
//  * Production-ready fetch wrapper for Sanity CMS queries
//  *
//  * @param query - The GROQ query string
//  * @param params - Optional parameter object passed to GROQ ($slug, $id, etc.)
//  * @param tags - Next.js Cache tags used for targeted revalidation (e.g., revalidateTag('page'))
//  * @param isDraftMode - Set to true when fetching draft content in Preview Mode
//  */
// export async function sanityFetch<T>({
//   query,
//   params = {},
//   tags = [],
//   //   isDraftMode = false,
// }: {
//   query: string;
//   params?: QueryParams;
//   tags?: string[];
//   //   isDraftMode?: boolean
// }): Promise<T> {
//   // If in draft preview mode, bypass cache entirely
//   //   if (isDraftMode) {
//   //     return client.fetch<T>(query, params, {
//   //       perspective: 'previewDrafts',
//   //       token: process.env.SANITY_API_READ_TOKEN,
//   //       useCdn: false,
//   //       next: { revalidate: 0 },
//   //     })
//   //   }

//   // Standard cached fetch for production
//   return client.fetch<T>(query, params, {
//     // perspective: 'published',
//     // useCdn: process.env.NODE_ENV === 'production',
//     next: {
//       revalidate: 60,
//       tags,
//     },
//   });
// }

// sanity/lib/fetch.ts
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
    // Fetch live draft content using the Read Token
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

  // Fetch standard cached production content
  return client.fetch<T>(query, params, {
    next: {
      tags, // Tags used for instant revalidation via Webhooks
    },
  });
}
