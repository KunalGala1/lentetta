import { groq } from 'next-sanity';
import client from './sanity.client';

export const getProfile = async () => {
  return client.fetch(
    groq`*[_type == 'profile'][0]{
              _id,
              name,
              headline,
              image {alt, "image": asset->url},
              shortBio,
              fullBio
          }`
  );
};

export const getRecordings = async () => {
  return client.fetch(
    groq`*[_type == 'recording'] | order(date desc) {
        _id,
        title,
        subtitle,
        soundcloudId
      }`
  );
};

export const getWorks = async () => {
  return client.fetch(
    groq`*[_type == 'work'] {
      _id,
      title,
      subtitle,
      description,
      createLinkedPage,
      year,
      'category':category->title, 
      "slug": slug.current
    }`
  );
};

export const getWorkBySlug = async (slug: string) => {
  return client.fetch(
    groq`*[_type == 'work' && slug.current == $slug][0]{
      _id,
      title,
      subtitle,
      description,
      year,
      duration,
      commissionInfo,
      performanceInfo,
      programNote,
      "slug": slug.current,
      additionalInfo,
    }`,
    { slug }
  );
};
