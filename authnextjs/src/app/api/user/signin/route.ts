import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/userModel";
import connect from "@/app/db/dbConfig";

connect();

export default async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    } else {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        return NextResponse.json(
          { message: "User logged in successfully" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 401 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json(
      { mesage: "error in signin route: " + error },
      { status: 500 }
    );
  }
}
