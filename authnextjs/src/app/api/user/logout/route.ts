import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.json({ message: "User logged out successfully" }, { status: 200 });
    response.cookies.set("token", "", {
        httpOnly: true,
        expires: new Date(0)
    });


    return response;
}