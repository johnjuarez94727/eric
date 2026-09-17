// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

const liveClient = createClient({
  apiVersion,
  dataset: isSanityConfigured ? dataset : "production",
  projectId: isSanityConfigured ? projectId : "placeholder",
  useCdn: true,
});

export const { sanityFetch, SanityLive } = defineLive({
  client: liveClient,
});
