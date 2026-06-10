import {NextResponse} from "next/server";
import {jwtVerify} from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "dev-jwt-secret-change-in-production"
);
const COOKIE_NAME = "auth_token";

export async function middleware(request) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
        const loginUrl = new URL("/pages/ai-stuff", request.url);
        loginUrl.searchParams.set("error", "login-required");
        return NextResponse.redirect(loginUrl);
    }

    try {
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.next();
    } catch {
        const loginUrl = new URL("/pages/ai-stuff", request.url);
        loginUrl.searchParams.set("error", "invalid-token");
        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: ["/pages/ai-stuff/secured/:path*"],
};
