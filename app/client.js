import client from '@sanity/client';

export default client({
  projectId: '6pu6sgpn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-09-29'
});