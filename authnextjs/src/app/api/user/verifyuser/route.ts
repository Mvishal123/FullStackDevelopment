import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { token } = reqBody;

  const user = await User.findOne({
    verifyToken: token,
    verifyTokenExpire: { $gt: Date.now() },
  });
  console.log(user);
  
  
  if (!user) {
    return NextResponse.json({
      message: "Invalid token or token expired",
      success: false,
    });
  }

  user.isVerified = true;
  user.verifyToken = undefined;
  user.verifyTokenExpire = undefined;
  await user.save();

  return NextResponse.json(
    {
      message: "User verified successfully",
      success: true,
    },
    { status: 200 }
  );
}
