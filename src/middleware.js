import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  // ONLY homepage
  if (url.pathname === "/") {
    // if query exists
    if (url.searchParams.toString() !== "") {
      return NextResponse.rewrite(
        new URL("/__404", request.url)
      );
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
