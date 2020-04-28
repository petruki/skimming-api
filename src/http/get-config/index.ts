import { APP_CONTEXT_ENDPOINT, APP_FILES, APP_CACHE_EXP_DURATION, APP_CACHE_SIZE } from "../../../config.ts";

export async function handler(req: object) {
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control": "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
        message: 'Success'
    })
  };
}