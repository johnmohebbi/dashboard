import { NextResponse, NextRequest } from "next/server";

export default function middleware(req) {
  const path = req.nextUrl.pathname;
  const cookie = req.cookies.has("TOKEN");
  if (!cookie) {
    if (path === "/signup") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/dashboard/:path*", "/signup"],
};
