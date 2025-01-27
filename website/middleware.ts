import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { apiAuthRoute, publicRoutes, authRoutes, DEFAULT_LOGIN_REDIRECT,  } from "./routes";
import { NextResponse } from "next/server";
import next from "next";

const {auth} = NextAuth({...authConfig});

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = apiAuthRoute.some(route => nextUrl.pathname.startsWith(route));
    const isPublicRoute = publicRoutes.some(route => nextUrl.pathname.startsWith(route));
    const isAuthRoute = authRoutes.some(route => nextUrl.pathname.startsWith(route));

    if (isApiAuthRoute) {
        NextResponse.next();
    }

    if (isAuthRoute) {
        if (!isLoggedIn) {
            return NextResponse.redirect(DEFAULT_LOGIN_REDIRECT);
        }
        NextResponse.next();
    }

    if (!isPublicRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL("/404", req.url));
    }

    return NextResponse.next();

    



});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }