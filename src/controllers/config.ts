import { Context } from "../deps.ts";
import {
  APP_CACHE_EXP_DURATION,
  APP_CACHE_SIZE,
  APP_CONTEXT_ENDPOINT,
  APP_FILES,
} from "../config.ts";

export default (context: Context) => {
  const res = context.response;

  try {
    res.status = 200;
    res.body = {
      message: "Success",
      url: APP_CONTEXT_ENDPOINT,
      files: APP_FILES.split(","),
      cacheDuration: `${APP_CACHE_EXP_DURATION}s`,
      cacheSize: APP_CACHE_SIZE,
    };
  } catch (e) {
    res.status = 500;
    res.body = {
      message: `Something went wrong - ${e.message}`,
    };
  }
};
