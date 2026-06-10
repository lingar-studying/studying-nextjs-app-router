import bcrypt from "bcryptjs";
import {SignJWT, jwtVerify} from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "dev-jwt-secret-change-in-production"
);
const COOKIE_NAME = "auth_token";
const TOKEN_EXPIRY = "7d";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

export async function signToken(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime(TOKEN_EXPIRY)
        .sign(JWT_SECRET);
}

export async function verifyToken(token) {
    const {payload} = await jwtVerify(token, JWT_SECRET);
    return payload;
}

export function getCookieOptions() {
    return {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: COOKIE_MAX_AGE,
    };
}

export {COOKIE_NAME, JWT_SECRET, COOKIE_MAX_AGE};
