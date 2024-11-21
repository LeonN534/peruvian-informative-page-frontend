"use server";

import { ErrorHandlder, FetchResponse, HttpMethod } from "./typesService";

export async function myFetch<T extends FetchResponse>(
  isCustomHeader: boolean, //true when use formData
  isCustomURL: boolean,
  endpoint: string,
  payload: string | FormData,
  resultHandler: (response: T) => any,
  errorHandler: ErrorHandlder,
  method = HttpMethod.POST,
  aditionalHeaders?: { [key: string]: string },
  nextOpions?: { [key: string]: string | string[] },
  cache?: RequestCache
) {
  const BASE_URL = process.env.API_URL;

  //"If isCustomURL is true, then the endpoint must have a complete URL(CUSTOM_BASE_URL+ custom_endpo)"

  const url = isCustomURL ? endpoint : `${BASE_URL}/${endpoint}`;

  return fetch(url, {
    cache: cache || "no-cache",
    method,
    next: { ...nextOpions },
    headers: {
      ...aditionalHeaders,
    },
    ...(method !== HttpMethod.GET && { body: payload }),
  })
    .then(async (response) => {
      if (response.status >= 500) {
        console.error("Server error", response);
        throw new Error("Bad response from server");
      }
      return await response.json();
    })
    .then((data: T) => {
      if (!data.status && data.status !== undefined) {
        let errorMessage = "Unexpected error has ocurred";
        // @ts-ignore
        errorMessage = data?.errors ? data.errors[0] : errorMessage;
        errorHandler(errorMessage);
        return;
      }
      resultHandler(data);
    })
    .catch((error: Error) => errorHandler(error.message));
}
