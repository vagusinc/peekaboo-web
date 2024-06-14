export function getEnv() {
  if (!process.env.NODE_ENV) throw new Error();

  if (!process.env.BASE_URL) throw new Error();

  if (!process.env.SUPABASE_URL) throw new Error();

  if (!process.env.SUPABASE_ANON_KEY) throw new Error();

  return {
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  let ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}
