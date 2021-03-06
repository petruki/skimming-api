import { Skimming, Output } from "https://deno.land/x/skimming/mod.ts";
import { APP_CACHE_SIZE, APP_CACHE_EXP_DURATION } from "../config.ts";

const skimmer = new Skimming({ expireDuration: APP_CACHE_EXP_DURATION, size: APP_CACHE_SIZE });

export default async function handler(
  files: string[],
  url: string,
  query: string,
  previewLength: number,
  ignoreCase: boolean,
  trimContent: boolean,
  regex: boolean,
  skipCache: boolean = false
): Promise<Output[]> {
    
  const skimContext = {
    url,
    files,
  };

  skimmer.useCache = !skipCache;
  skimmer.setContext(skimContext);
  const results = await skimmer.skim(query, {
    previewLength,
    ignoreCase,
    trimContent,
    regex
  });

  return results;
}
