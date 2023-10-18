import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import bcrypt from "bcryptjs";
import connect from "@/app/db/dbConfig";

connect();

export const sendMail = async (
  req: NextRequest,
  userId: string,
  mailType: "verify" | "forgot" | null
) => {
  const hashedUserId = await bcrypt.hash(userId, 10);

  const tranporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_KEY,
    },
  });

  const user = await User.findOne({ _id: userId });
  if (!user) {
    return NextResponse.json({
      message: "User not found",
      success: false,
    });
  }
  let email = user.email + "@gmail.com";
  if (mailType === "verify") {
    user.verifyToken = hashedUserId;
    user.verifyTokenExpire = Date.now() + 36 * 60 * 60 * 1000;
  } else {
    user.forgotpasswordToken = hashedUserId;
    user.forgotpasswordExpire = Date.now() + 36 * 60 * 60 * 1000;
  }

  console.log("sendMail:helper -> ", user);

  await user.save();

  const mail = await tranporter.sendMail({
    from: "Zombie <zombie123@gmail.com>",
    to: email,
    subject: mailType === "verify" ? "Verify your email" : "Reset password",
    text: "Remember, You are a great person!",
    html: `<p>Click <a href=${process.env.BASE_URL}/verification?token=${hashedUserId}> here </a> to verify your email</p>
        </br>
        <p>If not working, copy this URL and paste it in your browser</p></br>
        <p>${process.env.BASE_URL}/verification?token=${hashedUserId}</p>`,
  });

  if (mail) {
    console.log("Mail sent successfully");
  } else {
    console.log("Mail not sent");
  }

  return NextResponse.json(
    {
      message: "Mail sent successfully",
      success: true,
    },
    { status: 200 }
  );
};
