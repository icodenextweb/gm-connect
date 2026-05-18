import { defineField, defineType } from 'sanity';

export const feedback = defineType({
  name: 'feedback',
  title: 'Feedback Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'User Name',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'User Message',
      type: 'text',
    }),
    defineField({
      name: 'isApproved',
      title: 'Approved for Display',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});