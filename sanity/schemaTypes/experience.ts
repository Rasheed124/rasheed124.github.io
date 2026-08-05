import { defineType, defineField } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons/EyeOpen'

export default defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
      
    }),
    defineField({
      name: 'role',
      title: 'Job Role / Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location / Work Model',
      type: 'string',
      description: 'e.g., Remote, London (Remote), Lagos, Nigeria',
    }),
    defineField({
      name: 'website',
      title: 'Company Website URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Company Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
      hidden: ({ parent }) => parent?.isCurrentRole,
    }),
    defineField({
      name: 'isCurrentRole',
      title: 'Currently Working Here?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'description',
      title: 'Key Responsibilities / Achievements',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})