import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { apiAuthRoute, publicRoutes, authRoutes, DEFAULT_LOGIN_REDIRECT } from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth({ ...authConfig });

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const pathname = nextUrl.pathname;
    const isApiAuthRoute = apiAuthRoute.some(route => pathname.startsWith(route));
    const isPublicRoute = publicRoutes.some(route => {
        if (route === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(route);
    });
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));


    if (isApiAuthRoute) {
        return NextResponse.next();
    }


    if (isAuthRoute) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
        }
        return NextResponse.next();
    }


    if (!isPublicRoute && !isLoggedIn) {
        return NextResponse.rewrite(new URL("/404", req.url));
    }



    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|assets|fonts).*)"],
};
