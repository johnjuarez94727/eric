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
    params?: QueryParams,
    options?: Parameters<NonNullable<typeof realClient>["fetch"]>[2],
  ): Promise<T> => {
    if (!realClient) {
      return emptyResultForQuery<T>(query);
    }
    return realClient.fetch<T>(query, params ?? {}, options);
  },
};
