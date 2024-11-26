"use server";

import { revalidateTag } from "next/cache";
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

export async function voteCommentary(
  commentaryId: number,
  vote: "up" | "down"
) {
  const authToken = await getAuthToken();
  if (!authToken)
    return { status: 401, error: "Not authorized", success: false, data: null };
  let data: FetchResponse = { success: false };
  await myFetch<FetchResponse>(
    false,
    false,
    `commentaries/${commentaryId}/vote/${vote}`,
    "",
    (response) => {
      data = response;
      revalidateTag("commentaries");
    },
    (error) => console.error(error),
    HttpMethod.PATCH,
    {
      Authorization: `Bearer ${authToken}`,
    },
    { tags: ["commentaries"] }
  );
  return data;
}

export async function postCommentary(content: string, topic: Topics) {
  const authToken = await getAuthToken();
  if (!authToken)
    return { status: 401, error: "Not authorized", success: false, data: null };
  let data: FetchResponse = { success: false };
  await myFetch<FetchResponse>(
    false,
    false,
    `commentaries`,
    JSON.stringify({ content, topic }),
    (response) => {
      data = response;
      revalidateTag("commentaries");
    },
    (error) => console.error(error),
    HttpMethod.POST,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    { tags: ["commentaries"] }
  );
  return data;
}

export async function deleteCommentary(commentaryId: number) {
  const authToken = await getAuthToken();
  if (!authToken)
    return { status: 401, error: "Not authorized", success: false, data: null };
  let data: FetchResponse = { success: false };
  await myFetch<FetchResponse>(
    false,
    false,
    `commentaries/${commentaryId}`,
    "",
    (response) => {
      data = response;
      revalidateTag("commentaries");
    },
    (error) => console.error(error),
    HttpMethod.DELETE,
    {
      Authorization: `Bearer ${authToken}`,
    },
    { tags: ["commentaries"] }
  );
  return data;
}

export async function editCommentary(commentaryId: number, content: string) {
  const authToken = await getAuthToken();
  if (!authToken)
    return {
      status: 401,
      error: "Not authorized",
      success: false,
      data: null,
      message: null,
      token: null,
    };
  let data: FetchResponse = { success: false };
  await myFetch<FetchResponse>(
    false,
    false,
    `commentaries/${commentaryId}`,
    JSON.stringify({ content }),
    (response) => {
      data = response;
      revalidateTag("commentaries");
    },
    (error) => console.error(error),
    HttpMethod.PATCH,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    { tags: ["commentaries"] }
  );
  return data;
}
