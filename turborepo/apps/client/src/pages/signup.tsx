import { Signup } from "ui";
import axios from "axios";

import React from "react";

const signup = () => {
  return (
    <div>
      <Signup
        onClick={async (username, password) => {
          const res = await axios.post("/api/signup", {
            username,
            password,
          });

          if (!res) {
            console.log("error");
          } else {
            localStorage.setItem("token", res.data.token);
          }
        }}
      />
    </div>
  );
};

export default signup;
