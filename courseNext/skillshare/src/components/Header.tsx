import { Sun, Moon, ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import Searchbar from "./Searchbar";
import Cart from "./Cart";

function UserHeader() {
  return (
    <header className="fixed top-0 w-full px-4 md:px-6 lg:px-8 py-5 flex justify-between items-center backdrop:blur-md border-b/10">
      {/* Logo */}
      <h1 className="text-4xl font-extrabold text-slate-800 cursor-pointer">
        Skill<span className="text-[#7b2cbf]">Sphere</span>
      </h1>

      {/* section 1 */}
      <div className="hidden sm:block">
        <Searchbar />
      </div>

      {/* Section 2 */}
      <div className="hidden sm:flex justify-center items-center">
        <Button variant={"ghost"} className="group">
          <span>Learn</span>
          <span className="group-hover:rotate-180">
            <ChevronDownIcon />
          </span>
        </Button>
        <Button variant={"ghost"}>About</Button>
      </div>

      {/* university */}
      <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-[2.5px] rounded-full w-[150px] gap-6 md:block hidden">
        <div className="bg-white rounded-full px-2 hover:bg-transparent hover:text-white font-bold cursor-pointer text-center">
          <p>Teach</p>
        </div>
      </div>

      <div className="sm:flex items-center gap-2 hidden">
        <Cart />
        <Button variant={"ghost"}>
          Mode
        </Button>
      </div>

      {/* Profile button */}
      <div className="flex justify-center items-center">
        profilebutton
      </div>
    </header>
  );
}

export default UserHeader;
