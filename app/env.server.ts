export function getEnv() {
  if (
    !process.env.BASE_URL ||
    !process.env.SUPABASE_URL ||
    !process.env.SUPABASE_ANON_KEY ||
    !process.env.MAPBOX_URL ||
    !process.env.MAPBOX_ACCESS_TOKEN
  )
    throw new Error("Missing environment variables.");

  return {
    NODE_ENV: process.env.NODE_ENV || "development",
    BASE_URL: process.env.BASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    MAPBOX_URL: process.env.MAPBOX_URL,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  let ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}
