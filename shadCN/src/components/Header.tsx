import { useState } from "react";
import { Button } from "./ui/button";
import ProfileButton from "./ui/ProfileButton";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import HeaderSheet from "./ui/HeaderSheet";
import NAV_ROUTES from "../config";

const Header = () => {
  const [theme, setTheme] = useState("light");
  return (
    <header className="flex justify-between items-center border-b px-6">
      <HeaderSheet />
      <div className="p-4 sm:px-8 text-4xl font-extrabold text-slate-800">
        Crystal
      </div>
      <div className="hidden sm:block">
        {NAV_ROUTES.map((item, i) => (
          <Button className="lg:mx-6" key={i} asChild variant={"ghost"}>
            <span>{item.name}</span>
          </Button>
        ))}
      </div>
      <div className="hidden md:block">
        <Button variant={"ghost"} aria-label="Toggle Theme">
          <ShoppingCart />
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-100"></Sun>
          ) : (
            <Moon className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"></Moon>
          )}
          <span className="sr-only">Toggle only</span>
        </Button>
      </div>
      <div>
        <ProfileButton />
      </div>
    </header>
  );
};

export default Header;

// https://github.com/shadcn.png
