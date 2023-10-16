import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/userModel";
import connect from "@/app/db/dbConfig";
import jwt from "jsonwebtoken";

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
        const tokenData = {
          userId: user._id,
          username: user.username,
          email: user.email,
        };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
          expiresIn: "1d",
        });

        const response = NextResponse.json(
          { message: "User logged in successfully" },
          { status: 200 }
        );
        response.cookies.set("token", token, {
          httpOnly: true,
        });

        return response;
      }
    }
  } catch (error) {
    return NextResponse.json(
      { mesage: "error in signin route: " + error },
      { status: 500 }
    );
  }
}
