import { Signup } from "ui";

import React from "react";

const signup = () => {
  return (
    <div>
      <Signup onClick={(username, password) => {
        alert(username + " "  + password);
      }}/>
    </div>
  );
};

export default signup;
