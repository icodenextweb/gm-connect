import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'story',
  title: 'Our Story & Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Story Title',
      type: 'string',
      initialValue: 'Our Story',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6,
      description: 'The core narrative or background description for GM-Connect.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
  ],
});