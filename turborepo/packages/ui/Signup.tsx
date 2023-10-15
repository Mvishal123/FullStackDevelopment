import { useState } from "react";

export const Signup = (props: {onClick: (username: string, password: string) => void}) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    return (
    <div className="flexh-screen justify-center items-center">
      <div className="border border-black rounded-lg px-4 py-2 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-extrabold">
          Hello! Welcome to SKillshare!
        </h1>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="border border-black rounded-md placeholder:px-2"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border border-black rounded-md placeholder:px-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-green-400 px-3 py-1 rounded-lg font-bold" onClick={async () => props.onClick(username, password)}>
          Sign up
        </button>
      </div>
    </div>
  );
};
