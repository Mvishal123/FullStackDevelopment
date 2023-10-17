import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/userModel";
import connect from "@/app/db/dbConfig";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    } else {
      const passwordCheck = await bcrypt.compare(password, user.password);
      // console.log(passwordCheck);

      if (!passwordCheck) {
        return NextResponse.json(
          { message: "Error logging in" },
          { status: 404 }
        );
      } else {
        const tokenData = {
          userId: user._id,
          username: user.username,
          email: user.email,
        };
        const token = jwt.sign(tokenData, process.env.JWT_KEY!, {
          expiresIn: "1d",
        });

        const response = NextResponse.json(
          { message: "User logged in successfully" },
          { status: 200 }
        );
        response.cookies.set("token", token, {
          httpOnly: true,
        });

        // console.log(response);

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
