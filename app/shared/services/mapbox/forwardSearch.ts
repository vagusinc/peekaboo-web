import { mapboxClient } from "~/config/.client/mapboxClient";
import { Feature } from "./types";

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
