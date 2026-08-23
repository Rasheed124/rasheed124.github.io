import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons/Document";
import { MasterDetailIcon } from "@sanity/icons/MasterDetail";
import { CaseIcon } from "@sanity/icons/Case";
import { ProjectsIcon } from "@sanity/icons/Projects";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import DocumentTextIcon from "@sanity/icons/DocumentText";
import {UserIcon} from "@sanity/icons/User";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Page Description / Subheading",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "blocks",
      title: "Page Content Blocks",
      type: "array",
      of: [
        // 1. Education & Certification Block
        {
          type: "object",
          name: "educationBlock",
          title: "Education & Certification Section",
          icon: MasterDetailIcon,
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Section Title",
              type: "string",
              initialValue: "Education & Certifications",
            }),
            defineField({
              name: "items",
              title: "Select Education & Credentials",
              type: "array",
              of: [{ type: "reference", to: [{ type: "education" }] }],
            }),
          ],
        },

        // 2. Experience Block
        {
          type: "object",
          name: "experienceBlock",
          title: "Experience Section",
          icon: CaseIcon,
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Section Title",
              type: "string",
              initialValue: "Work Experience",
            }),
            defineField({
              name: "items",
              title: "Select Experience Entries",
              type: "array",
              of: [{ type: "reference", to: [{ type: "experience" }] }],
            }),
          ],
        },

        // 3. Projects Block
        {
          type: "object",
          name: "projectsBlock",
          title: "Projects Section",
          icon: ProjectsIcon,
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Section Title",
              type: "string",
              initialValue: "Featured Projects",
            }),
            defineField({
              name: "projects",
              title: "Select Specific Projects",
              type: "array",
              of: [{ type: "reference", to: [{ type: "project" }] }],
            }),
            defineField({
              name: "categories",
              title: "Or Select Entire Categories",
              type: "array",
              of: [{ type: "reference", to: [{ type: "projectCategory" }] }],
            }),
          ],
        },

        // 4. Contact Block
        {
          type: "object",
          name: "contactBlock",
          title: "Contact & Footer Section",
          icon: EnvelopeIcon,
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Section Title ",
              type: "string",
            }),
            defineField({
              name: "contactRef",
              title: "Link Contact Document",
              type: "reference",
              to: [{ type: "contact" }],
            }),
          ],
        },

        // 5. Rich Text Block
        {
          type: "object",
          name: "richTextBlock",
          title: "Rich Text Section",
          fields: [
            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }, { type: "image" }],
            }),
          ],
        },

        // 6. Blog Block
        {
          type: "object",
          name: "blogBlock",
          title: "Blog Section",
          icon: DocumentTextIcon,
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Section Title",
              type: "string",
              initialValue: "Latest Writings",
            }),
            defineField({
              name: "blogs",
              title: "Select Specific Blog Posts",
              type: "array",
              description:
                "Leave empty to automatically fetch all published blog posts.",
              of: [{ type: "reference", to: [{ type: "blogs" }] }],
            }),
          ],
        },

        {
          type: "object",
          name: "aboutBlock",
          title: "About / Profile Section",
          icon: UserIcon,
          fields: [
            defineField({
              name: "sectionTitle",
              title: "Section Title (Optional)",
              type: "string",
            }),
            defineField({
              name: "profileRef",
              title: "Link Profile Document",
              type: "reference",
              to: [{ type: "profile" }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "variant",
              title: "Display Variant",
              type: "string",
              options: {
                list: [
                  { title: "Hero Card (Home Banner)", value: "hero" },
                  { title: "Detailed Bio (About Page)", value: "detailed" },
                ],
                layout: "radio",
              },
              initialValue: "detailed",
            }),
          ],
        },
      ],
    }),
  ],
});
