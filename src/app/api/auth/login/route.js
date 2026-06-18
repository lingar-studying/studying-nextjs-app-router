import {NextResponse} from "next/server";
import {authenticateUser} from "@/app/server/user-auth-service";
import {COOKIE_NAME, getCookieOptions, signToken} from "@/app/server/auth";

export async function POST(request) {
    try {
        const {email, password} = await request.json();

        if (!email?.trim() || !password) {
            return NextResponse.json({error: "Email and password are required"}, {status: 400});
        }

        const user = await authenticateUser(email.trim().toLowerCase(), password);
        const token = await signToken({userId: user.id, email: user.email});

        const response = NextResponse.json({message: "Logged in successfully", user});
        response.cookies.set(COOKIE_NAME, token, getCookieOptions());

        return response;
    } catch (error) {
        return NextResponse.json({error: "Invalid credentials"}, {status: 401});
    }
}
