import { NextResponse } from "next/server";

export function middleware(req) {
  try {
    const url = req.nextUrl;

    // Block ANY query param on homepage
    if (
      url.pathname === "/" &&
      [...url.searchParams.keys()].length > 0
    ) {
      url.pathname = "/not-found";
      url.search = "";
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/"],
};
