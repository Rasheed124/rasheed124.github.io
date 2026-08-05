"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { presentationTool } from "sanity/presentation";

// Define document types that should act as singletons
const SINGLETON_TYPES = new Set(["landingPage", "contact", "profile"]);
export default defineConfig({
  name: "default",
  title: "Rasheed Portfolio Admin",
  basePath: "/admin",
  projectId,
  dataset,
  schema: {
    types: schema.types,
    // Filter out singleton types from the global "Create New Document" (+) menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        origin:
          typeof window !== "undefined"
            ? window.location.origin
            : "http://localhost:3000",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],

  document: {
    // Restrict actions on singletons (disable 'delete', 'duplicate', 'unpublish')
    actions: (input, context) => {
      if (SINGLETON_TYPES.has(context.schemaType)) {
        return input.filter(
          ({ action }) =>
            action && ["publish", "discardChanges", "restore"].includes(action),
        );
      }
      return input;
    },
  },
});
