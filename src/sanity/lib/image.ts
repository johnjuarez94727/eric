import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  dataset: dataset || "production",
  projectId: projectId || "placeholder",
});

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
