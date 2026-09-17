import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "../env";

const realClient = isSanityConfigured
  ? createClient({
      apiVersion,
      dataset,
      projectId,
      useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    })
  : null;

type FetchOptions = {
  cache?: RequestCache;
  next?: { revalidate?: number | false; tags?: string[] };
  perspective?: "previewDrafts" | "published" | "raw";
  stega?: boolean;
};

function emptyResultForQuery<T>(query: string): T {
  // Single-document GROQ queries use [0] { ... }; everything else is a list.
  const normalized = query.replace(/\s+/g, " ").trim();
  if (/\[0\]\s*\{/.test(normalized)) {
    return null as T;
  }
  return [] as T;
}

export const client = {
  fetch: async <T>(
    query: string,
    params: QueryParams = {},
    options?: FetchOptions,
  ): Promise<T> => {
    if (!realClient) {
      return emptyResultForQuery<T>(query);
    }

    if (options) {
      return realClient.fetch<T>(query, params, options);
    }

    return realClient.fetch<T>(query, params);
  },
};
