// schemas/contact.ts
import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons/Envelope'

export default defineType({
  name: 'contact',
  title: 'Contact Information & Footer',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform Name (e.g., GitHub, LinkedIn, Twitter, Telegram, Email)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string', // 'string' allows mailto: or relative paths easily
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
    // Footer Banner Customization
    defineField({
      name: 'footerBgImage',
      title: 'Footer Banner Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'developerName',
      title: 'Developer / Creator Name',
      type: 'string',
      initialValue: 'Rasheed Tolulope',
    }),
    defineField({
      name: 'developerUrl',
      title: 'Developer Link (e.g. GitHub profile)',
      type: 'url',
    }),
  ],
})