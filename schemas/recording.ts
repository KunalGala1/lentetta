import { defineField } from 'sanity';

const recording = {
  name: 'recording',
  title: 'Recording',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
  ],
};

export default recording;
