export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type ErrorHandlder = (error: string) => void;
export type FetchResponseHandlder = (response: FetchResponse) => any;

export type FetchResponse = {
  status?: boolean;
  error?: string;
  success?: boolean;
  token?: string;
  data?: any;
  message?: string;
};
