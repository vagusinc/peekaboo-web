import { useQuery } from "@tanstack/react-query";
import { supabaseClient } from "~/config";

const getSchools = async () => {
  try {
    const response = await supabaseClient.from("schools").select("*");
    return response;
  } catch (error) {
    throw new Error();
  }
};

const useGetSchools = () =>
  useQuery({
    queryKey: ["schools"],
    queryFn: getSchools,
  });

export { getSchools, useGetSchools };
