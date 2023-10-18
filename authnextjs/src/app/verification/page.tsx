"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const page = () => {
  const router = useRouter();

  const tokenParams: string = useSearchParams().get("token") || "";
  console.log(tokenParams);

  useEffect(() => {
    const init = async () => {
      const res = await axios.post("api/user/verifyuser", {
        token: tokenParams,
      });

      if (res.data.success) {
        console.log("client -> verified");
        router.push("/profile");
      } else {
        console.log("client -> not verified");
      }
    };

    init();
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <h1>Verification Page</h1>
      {tokenParams && (
        <div className="text-white font-extrabold ">Verifying...</div>
      )}{" "}
      {!tokenParams && (
        <div className="text-white font-extrabold ">Loading..</div>
      )}
    </div>
  );
};

export default page;
