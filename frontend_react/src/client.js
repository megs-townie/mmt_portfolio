import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: "2024-02-08",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source) => imageBuilder.image(source);