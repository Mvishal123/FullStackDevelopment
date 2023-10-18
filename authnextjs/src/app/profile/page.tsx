"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>("");
  const logoutHandler = async () => {
    try {
      await axios.get("api/user/logout");
      toast.success("Logged out successfully");
      router.push("/signin");
    } catch (error) {
      console.error(error);
      toast.error("Error logging out");
    }
  };

  useEffect(() => {
    const init = async () => {
      const res = await axios.get("api/user/me");
      // console.log(res);

      setUserData(res.data.data);
    };

    init();
  }, []);

  console.log("userdata: " + userData);

  const href_ = userData ? `profile/${userData?.username}` : "/profile";

  return (
    <main>
      <div className="h-20 w-full flex justify-end p-5">
        {!userData.isVerified && (
          <div className="flex flex-col items-center">
            <p className="text-red-400 font-extrabold text-xl">Not verified</p>
            <Link href={`/verifyuser`} className="underline text-white">verify</Link>
          </div>
        )}
        {userData.isVerified && (
          <div>
            <p className="text-green-400 font-extrabold text-xl">Verified</p>
          </div>
        )}
      </div>
      <div className="h-[85vh] flex flex-col gap-4 justify-center items-center text-orange-500">
        <h1 className="text-4xl">Profile page</h1>
        <h2>Welcome</h2>
        <Link href={href_}>
          <p className="text-white text-3xl font-bold">Profile</p>
        </Link>
        <div>
          <button
            onClick={logoutHandler}
            className="text-white font-bold bg-pink-500 px-3 py-2 rounded-lg shadow-sm hover:shadow-pink-500"
          >
            Log out
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
