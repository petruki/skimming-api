import { config } from "https://deno.land/x/dotenv/dotenv.ts";

export const APP_HOST = config().APP_HOST;
export const APP_PORT = config().APP_PORT;
export const APP_CONTEXT_ENDPOINT = config().APP_CONTEXT_ENDPOINT;
export const APP_FILES = config().APP_FILES;
export const APP_CACHE_EXP_DURATION: number = parseInt(config().APP_CACHE_EXP_DURATION);
export const APP_CACHE_SIZE: number = parseInt(config().APP_CACHE_SIZE);