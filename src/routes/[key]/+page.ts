export const prerender = false;

import type { PageLoad } from "../$types";
import { decodeUrl } from "$lib/generateUrl";

export const load: PageLoad = ({ params }) => {
  const key = (params as { key: string }).key;
  const data = decodeUrl(key);

  return data as {
    colors: string[];
    words: string[];
    wordInxes: number[];
  };
};
