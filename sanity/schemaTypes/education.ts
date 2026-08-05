import { defineType, defineField } from 'sanity'
import { MasterDetailIcon } from '@sanity/icons/MasterDetail'

export default defineType({
  name: 'education',
  title: 'Education & Certification',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'institution',
      title: 'Institution / Platform',
      type: 'string',
      description: 'e.g., University Name, Udemy, Coursera',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree / Certificate Title',
      type: 'string',
      description: 'e.g., B.Sc Computer Science, Full-Stack Web Development Certificate',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fieldOfStudy',
      title: 'Field of Study / Focus Area',
      type: 'string',
    }),
    defineField({
      name: 'certificateUrl',
      title: 'Certificate Link',
      type: 'url',
      description: 'Optional link to view or verify your credential online',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (or Expected)',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Notes / Key Highlights',
      type: 'text',
      rows: 3,
    }),
  ],
})