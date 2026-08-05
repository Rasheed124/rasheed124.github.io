// structure.ts
import type { StructureResolver } from "sanity/structure"
import { DocumentIcon } from "@sanity/icons/Document"
import { ProjectsIcon } from "@sanity/icons/Projects"
import { FolderIcon } from "@sanity/icons/Folder"
import { DocumentTextIcon } from "@sanity/icons/DocumentText"
import { CaseIcon } from "@sanity/icons/Case"
import { MasterDetailIcon } from "@sanity/icons/MasterDetail"
import { EnvelopeIcon } from "@sanity/icons/Envelope"
import { HomeIcon } from "@sanity/icons/Home"

// Define singletons to exclude from generic lists
const SINGLETONS = ["landingPage", "contact", "profile"]

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content Studio")
    .items([
      // 1. Singleton Home Page
      S.listItem()
        .title("Landing Page/Home")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("landingPage")
            .documentId("landingPage")
            .title("Landing Page/Home")
        ),

      S.divider(),

      // 2. Singleton Profile Page
      S.listItem()
        .title("Profile / About Me")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("profile")
            .documentId("profile")
            .title("Profile / About Me")
        ),

      S.divider(),

      // Regular Pages
      S.documentTypeListItem("page").title("Pages").icon(DocumentIcon),

      S.divider(),

      // Standalone Project Collections
      S.documentTypeListItem("projectCategory")
        .title("Project Categories")
        .icon(FolderIcon),
      S.documentTypeListItem("project")
        .title("All Projects")
        .icon(ProjectsIcon),

      S.divider(),

      // Standalone Blog Posts
      S.documentTypeListItem("blog").title("Blog Posts").icon(DocumentTextIcon),

      S.divider(),

      // Career & Contact Data
      S.documentTypeListItem("experience").title("Experience").icon(CaseIcon),
      S.documentTypeListItem("education")
        .title("Education")
        .icon(MasterDetailIcon),

      // Singleton Contact Info
      S.listItem()
        .title("Contact Info & Footer")
        .icon(EnvelopeIcon)
        .child(
          S.document()
            .schemaType("contact")
            .documentId("contact")
            .title("Contact Info & Footer")
        ),

      S.divider(),

      // Catch-all filter (Excludes 'home', 'contact', and all other explicitly placed types)
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return (
          id &&
          ![
            ...SINGLETONS,
            "page",
            "projectCategory",
            "project",
            "blog",
            "experience",
            "education",
          ].includes(id)
        )
      }),
    ])