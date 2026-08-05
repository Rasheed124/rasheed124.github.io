
// import { draftMode } from "next/headers";
// import { client } from "./client";

// export async function sanityFetch<T>({
//   query,
//   params = {},
//   tags = [],
// }: {
//   query: string;
//   params?: Record<string, unknown>;
//   tags?: string[];
// }): Promise<T> {
//   const { isEnabled: isDraftMode } = await draftMode();

//   if (isDraftMode) {
//     // Fetch live draft content using the Read Token
//     return client
//       .withConfig({
//         token: process.env.SANITY_API_READ_TOKEN,
//         useCdn: false,
//         perspective: "previewDrafts",
//         stega: {
//           enabled: true,
//           studioUrl: "/admin", 
//         },
//       })
//       .fetch<T>(query, params);
//   }

//   // Fetch standard cached production content
//   return client.fetch<T>(query, params, {
//     next: {
//       tags, // Tags used for instant revalidation via Webhooks
//     },
//   });
// }











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
      },
    });
}