"use client";

import { getUserTokenData } from "@/helpers/getUserTokenData";
import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [userData, setUserData] = useState<any>({});
  const [emailsent, setEmailSent] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const res = await axios.get("api/user/me");
      console.log(res);

      setUserData(res.data.data);
    };

    init();
  }, []);

  const submitHandler = async () => {
    try {
      const res = await axios.post("api/user/sendemail", {
        userId: userData._id,
        mailType: "verify",
      });

      if (res.data.success) {
        setEmailSent(true);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      {userData.isVerified && (
        <div>
          <p className="text-green-400 font-extrabold text-xl">
            user already verified
          </p>
        </div>
      )}
      {!userData.isVerified && (
        <div>
          <div className="border-2 border-white rounded-lg flex flex-col gap-4 justify-center">
            <h1 className="text-3xl text-white font-bold">
              Enter email to verify
            </h1>
            <input
              type="text"
              defaultValue={userData.email}
              placeholder="email"
            />
            <button
              className="bg-green-400 text-white px-3 py-2"
              onClick={submitHandler}
            >
              confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
