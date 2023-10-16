import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/userModel";
import connect from "@/app/db/dbConfig";

export async function POST(req: NextRequest) {
  try {
    await connect();

    const { username, email, password } = await req.json();
    console.log(username, password, email);

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await new User({
        username,
        password: hashedPassword,
        email,
      });

      newUser.save();

      return NextResponse.json(
        {
          message: "user created successfully",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
