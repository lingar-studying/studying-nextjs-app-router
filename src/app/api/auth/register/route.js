import {NextResponse} from "next/server";
import {createUser} from "@/app/server/user-auth-service";

export async function POST(request) {
    try {
        const {name, email, password} = await request.json();

        if (!name?.trim() || !email?.trim() || !password) {
            return NextResponse.json({error: "Name, email, and password are required"}, {status: 400});
        }

        if (password.length < 6) {
            return NextResponse.json({error: "Password must be at least 6 characters"}, {status: 400});
        }

        const user = await createUser({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password,
        });

        return NextResponse.json({message: "User created successfully", user}, {status: 201});
    } catch (error) {
        return NextResponse.json(
            {error: error.message || "Registration failed"},
            {status: 400}
        );
    }
}
