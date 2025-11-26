import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const langCookie = req.cookies.get("lang")?.value;

  if (!langCookie) {
    const header = req.headers.get("accept-language") || "";
    const prefersHindi = header.toLowerCase().startsWith("hi");

    const response = NextResponse.next();

    response.cookies.set("lang", prefersHindi ? "hi" : "en", {
      path: "/",
      maxAge: 31536000
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)"
};
