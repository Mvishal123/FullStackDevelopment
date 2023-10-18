import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/helpers/sendMail";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { userId, mailType } = reqBody;

  const mail: any = await sendMail(req, userId, mailType);

  return mail;
}
