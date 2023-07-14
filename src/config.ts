const env = Deno.env;

export const APP_HOST = env.get('APP_HOST') || '127.0.0.1';
export const APP_PORT = env.get('APP_PORT') || 4000;
export const APP_CONTEXT_ENDPOINT = env.get('APP_CONTEXT_ENDPOINT') ||
  'https://raw.githubusercontent.com/petruki/skimming/master/';
export const APP_FILES = env.get('APP_FILES') || 'README.md';

const ENV_APP_CACHE_EXP_DURATION = env.get('APP_CACHE_EXP_DURATION') || '';
export const APP_CACHE_EXP_DURATION: number = parseInt(ENV_APP_CACHE_EXP_DURATION) || 5;

const ENV_APP_CACHE_SIZE = env.get('APP_CACHE_SIZE') || '';
export const APP_CACHE_SIZE: number = parseInt(ENV_APP_CACHE_SIZE) || 100;
