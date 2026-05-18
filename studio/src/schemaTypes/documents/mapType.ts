// schemas/mapType.ts
import { defineField, defineType } from 'sanity'

export const mapType = defineType({
  name: 'mapSettings',
  title: 'Map Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'locationName',
      type: 'string',
      initialValue: 'Our Office',
    }),
    defineField({
      name: 'iframeCode',
      title: 'Google Maps Iframe Code',
      description: 'Go to Google Maps -> Share -> Embed -> Copy HTML and paste it here.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})