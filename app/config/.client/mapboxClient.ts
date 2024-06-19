/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";

export class ApiError<T> extends Error {
  options?: T;

  constructor(message: string, options?: T) {
    super(message);
    this.options = options;
  }
}

export const mapboxClient = axios.create({
  baseURL: window.ENV.MAPBOX_URL,
});

mapboxClient.interceptors.request.use((config) => {
  // add auth headers or other config here
  config.params = {
    ...config.params,
    access_token: window.ENV.MAPBOX_ACCESS_TOKEN,
  };
  return config;
});

mapboxClient.interceptors.response.use(onRequestFulfilled, onRequestRejected);

function onRequestFulfilled(value: AxiosResponse<any, any>) {
  return value;
}

function onRequestRejected(error: AxiosError) {
  throw new ApiError<{ message: string }>(
    (error.response?.data as any) || error?.message,
    error?.response?.data as any
  );
}
