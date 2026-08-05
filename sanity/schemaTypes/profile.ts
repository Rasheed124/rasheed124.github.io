import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons/User";

export default defineType({
  name: "profile",
  title: "Profile / About Me",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline / Subheading",
      type: "string",
      description: 'e.g., "Engineer • Developer • Builder"',
    }),
    defineField({
      name: "shortBio",
      title: "Short Hero Bio",
      type: "text",
      rows: 3,
      description: "Brief summary shown on the home page hero header.",
    }),
    defineField({
      name: "fullBioHeading",
      title: "About Section Heading",
      type: "string",
      initialValue: "Hey there, I'm Rasheed 👋",
    }),
    defineField({
      name: "fullBio",
      title: "Main About Paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "avatar",
      title: "Profile Avatar Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bannerImage",
      title: "Hero Banner Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "resumeUrl",
      title: "Resume / CV File or Link",
      type: "url",
    }),
    defineField({
      name: "focusAreas",
      title: "Focus Areas / Core Expertise",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Area Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: "closingText",
      title: "Closing Note",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),
  ],
});