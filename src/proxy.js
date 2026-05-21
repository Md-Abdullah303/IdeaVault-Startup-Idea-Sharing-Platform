import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session?.user;
  if (!session || !session?.user) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", request.nextUrl.pathname);

    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: [
    "/my-idea",
    "/ideas/:path",
    "/add-idea",
    "/my-interactions",
    "/profile",
  ],
};
