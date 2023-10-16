"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Singup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [enableBtn, setEnableBtn] = useState(false);

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.password.length > 0 &&
      user.email.length > 0
    ) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [user]);

  const onSubmitHandler = async () => {
    try {
      setLoading(true);
      await axios.post("api/user/signup", user);
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
      router.push("/signin");
    }
  };
  return (
    <div className="h-screen text-white flex justify-center items-center">
      <div className="px-12 py-6 border-4 border-white rounded-lg ">
        <h1 className="text-3xl font-bold text-center">Sign up</h1>
        <h1 className="font-bold text-center text-slate-600">
          {loading ? "processing" : ""}
        </h1>
        <div>
          <div className="p-2 flex flex-col">
            <label htmlFor="email">email</label>
            <input
              className="rounded-lg border-2 border-black p-1 text-black"
              type="text"
              id="email"
              placeholder="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="username">username</label>
            <input
              className="rounded-lg border-2 border-black p-1 text-black"
              type="text"
              id="username"
              placeholder="username"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
          </div>
          <div className="p-2 flex flex-col ">
            <label htmlFor="password">password</label>
            <input
              className="rounded-lg border-2 border-black p-1 text-black"
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex justify-center pt-6 flex-col">
          <button
            className="p-2 bg-orange-500 text-black rounded-lg font-bold "
            onClick={onSubmitHandler}
          >
            {enableBtn ? "Sign up" : "disabled"}
          </button>
          <Link href={"/signin"} className="text-orange-500 text-center">
            Have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singup;
