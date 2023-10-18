import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios"

export const page = () => {
  const token: string = useSearchParams().get("token") || "";
  console.log(token);

  useEffect(() => {

  })

  return (
    <div className="">
      <h1>Verification</h1>
    </div>
  );
};

export default page;
