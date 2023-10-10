import React from "react";
import Signin from "./Signin";
import SigninSSR from "./SigninSSR";

const Header = async () => {


  return (
    <nav className="bg-slate-600">
      <div className="p-8">
        <div className="flex items-center justify-between text-white">
          <h1 className="font-bold text-4xl">LOGO</h1>
          <div>
            <SigninSSR />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
