import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/pt/, "") || "/";
    return NextResponse.redirect(url);
  }

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/pt", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/pt", "/pt/:path*", "/en", "/en/:path*"],
};
