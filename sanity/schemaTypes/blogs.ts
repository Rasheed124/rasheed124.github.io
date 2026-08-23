import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons/DocumentText";

export default defineType({
  name: "blogs",
  title: "Blog Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bannerBg",
      title: "Banner Background Class",
      type: "string",
      description: 'e.g., "bg-gradient-to-r from-blue-500 to-indigo-600"',
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      options: { dateFormat: "MMMM D, YYYY" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: 'e.g., "5 min read"',
    }),
  ],
});
