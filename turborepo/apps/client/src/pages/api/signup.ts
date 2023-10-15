import { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from "../../lib/connectDb";
import { Users } from "db";
import jwt from "jsonwebtoken";

type resData = {
  name?: string;
  token?: string;
  message?: string;
};

const secret = "dummysecret"

export default  async function signup(
  req: NextApiRequest,
  res: NextApiResponse<resData>
) {
    await connectDb();
  const { username, password } = req.body;
  const user = await Users.findOne({username});
  if(user){
    return res.status(422).json({message: "User already exists"});
  } else{
    const newUser = await Users.create({username: username, password: password});
    newUser.save();
    const userToken = jwt.sign({id: newUser._id}, secret, {expiresIn: "6d"});
    res.status(200).json({message: "User created successfully", token: userToken});
  }
}
