import { NextRequest, NextResponse } from "next/server";
import { getUserTokenData } from "@/helpers/getUserTokenData";
import connect from "@/app/db/dbConfig";
import { User } from "@/models/userModel";

connect();

export async function GET(req: NextRequest) {
  try {
    const userId = await getUserTokenData(req);

    if (userId) {
      const user = await User.findById(userId).select("-password "); // this is for not selecting password
    //   console.log("me: user -> " + user);

      return NextResponse.json({
        data: user,
      });
    }
    return NextResponse.json({});
  } catch (error: any) {
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}
