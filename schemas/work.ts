import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'createLinkedPage',
      title: 'Create Seperate Page for this Work?',
      type: 'boolean',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'commissionInfo',
      title: 'Commission Information',
      type: 'string',
    }),
    defineField({
      name: 'performanceInfo',
      title: 'Performance Information',
      type: 'string',
    }),

    defineField({
      name: 'programNote',
      title: 'Program Note',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
