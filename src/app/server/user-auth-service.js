import {connectDB2} from "@/app/server/db-services";
import User from "@/app/server/models/User";
import {hashPassword, verifyPassword} from "@/app/server/auth";

export async function createUser({name, email, password}) {
    await connectDB2();

    const existing = await User.findOne({email});
    if (existing) {
        throw new Error("Email already registered");
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({name, email, password: hashedPassword});

    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
    };
}

export async function authenticateUser(email, password) {
    await connectDB2();

    const user = await User.findOne({email});
    if (!user) {
        throw new Error("Invalid credentials");
    }

    const valid = await verifyPassword(password, user.password);
    if (!valid) {
        throw new Error("Invalid credentials");
    }

    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
    };
}

export async function getUserById(id) {
    await connectDB2();
    return User.findById(id).select("-password");
}
