import { NextResponse, NextRequest } from "next/server";
import { getLoggedInUser, verifyToken } from "./app/services/auth.service";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  let userRes = await getLoggedInUser();

  let url = request.nextUrl.clone();

  if (currentPath.startsWith("/forgot-password/restore")) {
    url.search = "";
    url.pathname = "/404";

    if (!request.nextUrl.searchParams.get("token")) {
      return NextResponse.redirect(url);
    }
    const token = await verifyToken(
      request.nextUrl.searchParams.get("token") || ""
    );
    if (token.error) return NextResponse.redirect(url);
  }

  if (currentPath.startsWith("/login") && userRes.success) {
    url.search = "";
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (currentPath.startsWith("/user") && !userRes.success) {
    url.search = "";
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}
