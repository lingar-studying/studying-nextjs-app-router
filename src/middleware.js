import {NextResponse} from "next/server";
import {jwtVerify} from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "dev-jwt-secret-change-in-production"
);
const COOKIE_NAME = "auth_token";

export async function middleware(request) {

    console.log("middle ware happen")
    const { pathname } = request.nextUrl;
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {

        // אם מדובר בפניית API - תחזיר JSON עם 401 ולא הפניית דף HTML
        console.log("pathname = ", pathname)
        if (pathname.startsWith("/api/")) {
            console.log("apis....")
            return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
        }

        const loginUrl = new URL("/pages/ai-stuff", request.url);
        loginUrl.searchParams.set("error", "login-required");
        return NextResponse.redirect(loginUrl);
    }

    try {
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.next();
    } catch (err) {
        // אם ה-Token פג תוקף או שגוי והפנייה היא ל-API
        if (pathname.startsWith("/api/")) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        // לדפים רגילים - הפניה לדף התחברות
        const loginUrl = new URL("/pages/ai-stuff", request.url);
        loginUrl.searchParams.set("error", "invalid-token");
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {


    matcher: ["/pages/ai-stuff/secured/:path*", "/api/secured/:path*", "/api/secured"],//path* = all sub paths, and empty etc...
};
