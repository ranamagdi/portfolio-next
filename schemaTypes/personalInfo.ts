import {defineField, defineType} from 'sanity'

export const personalInfo = defineType({
  name: 'personalInfo',
  title: 'Personal Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio (Hero)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar / Profile Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number (with country code)',
      type: 'string',
    }),
    defineField({
      name: 'cvUrl',
      title: 'CV / Resume URL',
      type: 'url',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
            {name: 'icon', title: 'Icon Name (e.g. github, linkedin)', type: 'string'},
          ],
        },
      ],
    }),
  ],
})
