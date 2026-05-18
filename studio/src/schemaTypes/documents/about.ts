// schemas/about.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    // --- Section 1: Hero/Introduction ---
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Our Business',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Business Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Business Description',
      type: 'array',
      of: [{ type: 'block' }], // Rich text for bold, italics, links
    }),

    // --- Section 2: Team Members ---
    defineField({
      name: 'team',
      title: 'Our Team',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Full Name', type: 'string' },
            { name: 'role', title: 'Role/Designation', type: 'string' },
            { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
          ]
        }
      ]
    }),

    // --- Section 3: Location & Maps ---
    defineField({
      name: 'location',
      title: 'Location & Map Info',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Physical Address',
          type: 'text',
          rows: 3,
        },
        {
          name: 'googleMapsUrl',
          title: 'Google Maps URL',
          type: 'url',
          description: 'Paste the direct share link from Google Maps here.',
        }
      ]
    }),

    // --- Section 4: SEO (Optional but recommended) ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
  ],
})