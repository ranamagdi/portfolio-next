import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Languages & Core', value: 'Languages & Core'},
          {title: 'Frameworks & Libraries', value: 'Frameworks & Libraries'},
          {title: 'Styling & UI', value: 'Styling & UI'},
          {title: 'Architecture & Concepts', value: 'Architecture & Concepts'},
          {title: 'Features & Systems', value: 'Features & Systems'},
          {title: 'Tools & Integrations', value: 'Tools & Integrations'},
          {title: 'Testing', value: 'Testing'},
          {title: 'Workflow & CMS', value: 'Workflow & CMS'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
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
})
