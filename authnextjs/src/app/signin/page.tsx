"use client";
import Link from "next/link";
import React, { useState } from "react";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="h-screen text-white flex justify-center items-center">
      <div className="px-12 py-6 border-4 border-white rounded-lg ">
        <h1 className="text-3xl font-bold text-center">Sign in</h1>
        <div>
          <div className="p-2 flex flex-col">
            <label htmlFor="email">email</label>
            <input
              className="rounded-lg border-2 border-black p-1"
              type="text"
              id="email"
              placeholder="email"
            />
          </div>
          <div className="p-2 flex flex-col ">
            <label htmlFor="password">password</label>
            <input
              className="rounded-lg border-2 border-black p-1"
              type="password"
              id="password"
              placeholder="password"
            />
          </div>
        </div>
        <div className="flex justify-center pt-6 flex-col">
          <button className="p-2 bg-orange-500 text-black rounded-lg font-bold">
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
