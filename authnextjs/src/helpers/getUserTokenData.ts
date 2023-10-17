import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function getUserTokenData(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value || "";
    // console.log("token: " + token);

    const secret = process.env.JWT_KEY;
    // console.log(("secret: " + secret) as string);

    const decodedToken: any = secret && jwt.verify(token, secret);
    // console.log("decoded: " + decodedToken.username);

    return decodedToken.userId;
  } catch (error: any) {
    console.error("error in getUserTokenData", error.message);
    throw new Error(error.message);
  }
}
