import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {COOKIE_NAME, verifyToken} from "@/app/server/auth";
import {getUserById} from "@/app/server/user-auth-service";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
        return NextResponse.json({user: null}, {status: 401});
    }

    try {
        const payload = await verifyToken(token);
        const user = await getUserById(payload.userId);

        if (!user) {
            return NextResponse.json({user: null}, {status: 401});
        }

        return NextResponse.json({
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
            },
        });
    } catch {
        return NextResponse.json({user: null}, {status: 401});
    }
}
