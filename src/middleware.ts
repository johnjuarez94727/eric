import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|apple-icon.png|icon-192.png|icon-512.png|favicon.svg|og-image.png|manifest.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
