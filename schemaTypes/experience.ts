import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Work Experience', value: 'work'},
          {title: 'Education', value: 'education'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Degree Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company / Institution',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
      description: 'e.g. 09/2024',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'string',
      description: 'e.g. 03/2026 (leave empty if current)',
    }),
    defineField({
      name: 'current',
      title: 'Currently Here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'field',
      title: 'Field / Major (Education only)',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: 'Grade / Result (Education only)',
      type: 'string',
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights (bullet points)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order (lower = first)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
      type: 'type',
    },
    prepare({title, subtitle, type}) {
      return {
        title,
        subtitle: `${type === 'work' ? '💼' : '🎓'} ${subtitle}`,
      }
    },
  },
})
