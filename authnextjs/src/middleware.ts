import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // When user is already signed in redirect to profile page
  const isPublic = path === "/signin" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";
  

  if (token && isPublic) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  } 
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile","/profile:id", "/signin", "/signup", "/"],
};
