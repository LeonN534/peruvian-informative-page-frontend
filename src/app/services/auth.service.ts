"use server";

import { myFetch } from "@/app/common/APIs/baseService";
import { FetchResponse, HttpMethod } from "@/app/common/APIs/typesService";
import { cookies } from "next/headers";
import { RegisterUserProps } from "../(auth)/register/interfaces/register-user-props.interface";

export async function registerUserService(userData: RegisterUserProps) {
  let data: FetchResponse = { success: false };
  await myFetch<FetchResponse>(
    false,
    false,
    `auth/register`,
    JSON.stringify({ ...userData }),
    (response) => {
      data = response;
    },
    (error) => console.error(error),
    HttpMethod.POST,
    { "Content-Type": "application/json" }
  );
  return data;
}

// export async function loginUserService(userData: LoginUserProps) {
//   let data: FetchResponse = { success: false };
//   await myFetch<FetchResponse>(
//     false,
//     false,
//     `auth/login`,
//     JSON.stringify({ ...userData }),
//     (response) => {
//       data = response;
//     },
//     (error) => console.error(error),
//     HttpMethod.POST,
//     { "Content-Type": "application/json" }
//   );
//   return data;
// }

// export async function forgotPasswordService(userData: ForgotPasswordProps) {
//   let data: FetchResponse = { success: false };
//   await myFetch<FetchResponse>(
//     false,
//     false,
//     `auth/forgot-password`,
//     JSON.stringify({ ...userData }),
//     (response) => {
//       data = response;
//     },
//     (error) => console.error(error),
//     HttpMethod.POST,
//     { "Content-Type": "application/json" }
//   );
//   return data;
// }

// export async function restorePasswordService(
//   userData: RestorePasswordProps,
//   token: string
// ) {
//   let data: FetchResponse = { success: false };
//   await myFetch<FetchResponse>(
//     false,
//     false,
//     `auth/forgot-password/restore?token=${token}`,
//     JSON.stringify({ ...userData }),
//     (response) => {
//       data = response;
//     },
//     (error) => console.error(error),
//     HttpMethod.POST,
//     { "Content-Type": "application/json" }
//   );
//   return data;
// }

// export async function changePasswordService(userData: ChangePasswordProps) {
//   const jwt = await getAuthToken();
//   let data: FetchResponse = { success: false };
//   await myFetch<FetchResponse>(
//     false,
//     false,
//     `auth/change-password`,
//     JSON.stringify({ ...userData }),
//     (response) => {
//       data = response;
//     },
//     (error) => console.error(error),
//     HttpMethod.POST,
//     {
//       Authorization: `Bearer ${jwt}`,
//       "Content-Type": "application/json",
//     }
//   );
//   return data;
// }

// export async function verifyToken(token: string) {
//   let data: FetchResponse = { success: false };
//   await myFetch<FetchResponse>(
//     false,
//     false,
//     `auth/forgot-password/validate-token?token=${token}`,
//     "",
//     (response) => {
//       data = response;
//     },
//     (error) => console.error(error),
//     HttpMethod.POST
//   );
//   return data;
// }

export async function getLoggedInUser() {
  const authToken = await getAuthToken();
  if (!authToken)
    return { status: 404, error: "Not authorized", success: false, data: null };

  let data: FetchResponse = { success: false };
  await myFetch<FetchResponse>(
    true,
    false,
    `auth/validate-jwt`,
    "",
    (response) => {
      data = response;
    },
    (error) => console.error(error),
    HttpMethod.GET,
    {
      Authorization: `Bearer ${authToken}`,
    },
    { tags: ["auth"] }
  );
  return data;
}

export async function getAuthToken() {
  const clientCookies = await cookies();
  const authToken = clientCookies.get("jwt")?.value;
  return authToken;
}
