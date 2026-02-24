// src/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("ids_session")?.value;
  const { pathname } = request.nextUrl;

  // 1. If no session and not on login page, redirect to login
  if (!session && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. If logged in and trying to access login, redirect to dashboard
  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};