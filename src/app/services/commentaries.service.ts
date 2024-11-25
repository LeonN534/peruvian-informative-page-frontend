import { myFetch } from "../common/APIs/baseService";
import { FetchResponse, HttpMethod } from "../common/APIs/typesService";
import { Topics } from "../enums/topics.enum";
import { getAuthToken } from "./auth.service";

export async function getComentariesByTopic(topic: Topics, offset: number) {
  let data: FetchResponse = { success: false };
  await myFetch<FetchResponse>(
    false,
    false,
    `commentaries/${topic}?limit=10&offset=${offset}`,
    "",
    (response) => {
      data = response;
    },
    (error) => console.error(error),
    HttpMethod.GET,
    {},
    { tags: ["commentaries"] }
  );
  return data;
}
