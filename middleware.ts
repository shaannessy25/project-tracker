import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_FILE = /\.(.*)$/i;

const verifyJWT = async (jwt): Promise<any> => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  return payload;
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/register") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const jwt = req.cookies.get(process.env.COOKIE_NAME as string);

  if (!jwt) {
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    const payload = await verifyJWT(jwt);
    // Check if the user is signed in
    if (!payload) {
      req.nextUrl.pathname = "/signin";
      return NextResponse.redirect(req.nextUrl);
    }

    // Redirect to the home page
    if (pathname === "/signin") {
      req.nextUrl.pathname = "/home";
      return NextResponse.redirect(req.nextUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error(error);
  }
}
