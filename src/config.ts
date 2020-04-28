const env = Deno.env();

export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = env.APP_PORT || 4000;
export const APP_CONTEXT_ENDPOINT = env.APP_CONTEXT_ENDPOINT || "https://raw.githubusercontent.com/petruki/skimming/master/";
export const APP_FILES = env.APP_FILES || "README.md";
export const APP_CACHE_EXP_DURATION: number = parseInt(env.APP_CACHE_EXP_DURATION) || 5;
export const APP_CACHE_SIZE: number = parseInt(env.APP_CACHE_SIZE) || 100;