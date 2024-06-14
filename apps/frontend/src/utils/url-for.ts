import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "~/cms";

const builder = imageUrlBuilder(client);

/**
 * Callback function to get an URL for a Sanity image.
 * @param source Image source
 * @returns Image url builder
 */
const urlFor = (source: SanityImageSource) => builder.image(source);

export { urlFor };
