// schemas/home.ts
import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons/Home";
import { MasterDetailIcon } from "@sanity/icons/MasterDetail";
import { CaseIcon } from "@sanity/icons/Case";
import { ProjectsIcon } from "@sanity/icons/Projects";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import UserIcon from "@sanity/icons/User";

export default defineType({
  name: "landingPage",
  title: "Landing Page/Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Primary title used for browser tab & SEO",
      initialValue: "Home",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 2,
      description: "Main SEO meta description for search engine results",
    }),
    defineField({
      name: "ogImage",
      title: "OpenGraph Image",
      type: "image",
      description: "Social sharing preview image",
      options: { hotspot: true },
    }),
    defineField({
      name: "blocks",
      title: "Page Content Blocks",
      type: "array",
      of: [
        // 1. Education Block
        {
          type: "object",
          name: "educationBlock",
          title: "Education Section",
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
              title: "Select Education Entries",
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
              title: "Section Title",
              type: "string",
            }),
            defineField({
              name: "contactRef",
              title: "Link Contact Info Document",
              type: "reference",
              to: [{ type: "contact" }],
            }),
          ],
        },

        // 5. About Block

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

  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Home Page",
        subtitle: "Singleton Landing Page",
      };
    },
  },
});
