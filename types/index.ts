import { PortableTextBlock } from 'sanity';

export type ProfileType = {
  _id: string;
  name: string;
  headline: string;
  image: {
    alt: string;
    image: string;
  };
  shortBio: string;
  fullBio: PortableTextBlock[];
  featuredRecording: RecordingType;
};

export type RecordingType = {
  _id: string;
  title: string;
  subtitle: string;
  url: string;
};

export type WorksType = {
  _id: string;
  title: string;
  createLinkedPage: boolean;
  subtitle: string;
  year: string;
  description: string;
  duration: string;
  commissionInfo: string;
  performanceInfo: string;
  programNote: PortableTextBlock[];
  category: string;
  slug: string;
};

export type WorkType = {
  _id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  duration: string;
  commissionInfo: string;
  performanceInfo: string;
  programNote: PortableTextBlock[];
  additionalInfo: PortableTextBlock[];
};
