import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'ifbd9mqj',
  dataset: 'production',
  apiVersion: '2023-07-16',
  useCdn: false,
};

const client = createClient(config);

export default client;
