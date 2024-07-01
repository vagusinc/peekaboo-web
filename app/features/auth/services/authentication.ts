import { supabaseClient } from "~/config";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  return response;
};
