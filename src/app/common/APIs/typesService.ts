export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type ErrorHandlder = (error: string) => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FetchResponseHandlder = (response: FetchResponse) => any;

export type FetchResponse = {
  status?: boolean;
  error?: string;
  success?: boolean;
  token?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  message?: string;
};
