/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";

export class ApiError<T> extends Error {
  options?: T;

  constructor(message: string, options?: T) {
    super(message);
    this.options = options;
  }
}

export const axiosClient = axios.create({
  baseURL: window.ENV.BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  // add auth headers or other header config here
  return config;
});

axiosClient.interceptors.response.use(onRequestFulfilled, onRequestRejected);

function onRequestFulfilled(value: AxiosResponse<any, any>) {
  return value;
}

function onRequestRejected(error: AxiosError) {
  throw new ApiError<{ message: string }>(
    (error.response?.data as any) || error?.message,
    error?.response?.data as any
  );
}
