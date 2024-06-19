import { mapboxClient } from "~/config/.client/mapboxClient";

export const forwardSearch = async (locationString: string) => {
  const url = `/search/geocode/v6/forward?q=${locationString}`;

  const response = await mapboxClient.get(url);
  return response;
};
