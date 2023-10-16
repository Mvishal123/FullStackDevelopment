"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [enableBtn, setEnableBtn] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [user]);

  const onSubmitHandler = async () => {
    try {
      setLoading(true);
      await axios.post("api/user/signin", user);
      toast.success("signed in successfully");
      router.push("/profile");
    } catch (error) {
      console.log("error signing in: ", error);
      toast.error("error signing in");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen text-white flex justify-center items-center">
      <div className="px-12 py-6 border-4 border-white rounded-lg ">
        <h1 className="text-3xl font-bold text-center">Sign in</h1>
        <div>
          <div className="p-2 flex flex-col">
            <label htmlFor="email">email</label>
            <input
              className="rounded-lg border-2 border-black p-1 text-black"
              type="text"
              id="email"
              placeholder="email"
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
          </div>
          <div className="p-2 flex flex-col text-black">
            <label htmlFor="password">password</label>
            <input
              className="rounded-lg border-2 border-black p-1"
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setUser({...user, password: e.target.value})}

            />
          </div>
        </div>
        <div className="flex justify-center pt-6 flex-col">
          <button className="p-2 bg-orange-500 text-black rounded-lg font-bold" onClick={onSubmitHandler}>
            Sign in
          </button>
          <Link href={"/signup"} className="text-orange-500 text-center">
            don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
