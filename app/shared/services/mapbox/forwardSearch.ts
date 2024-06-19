import { mapboxClient } from "~/config/.client/mapboxClient";
import { Feature } from "./types";

/**
 * Forward search can be refined with more parameters added on the query params.
 * For now, only the required location string is needed.
 * If more parameters are needed, please discuss with the lead and
 * create a type for the accepted arguments for the function.
 */
export const forwardSearch = async (
  locationString: string
): Promise<{
  attribution: string;
  type: string;
  features: Feature[];
}> => {
  const url = `/search/geocode/v6/forward?q=${locationString}`;

  const response = await mapboxClient.get(url);
  return response.data;
};

export const reverseGeocoding = async (long: string, lat: string) => {
  const url = `/search/geocode/v6/reverse?longitude=${long}&latitude=${lat}`;

  const response = await mapboxClient.get(url);
  return response.data;
};
