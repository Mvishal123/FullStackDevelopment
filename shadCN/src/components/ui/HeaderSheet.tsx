import { Sheet, SheetContent, SheetTrigger} from "./sheet";
import {Menu, Camera} from "lucide-react"
import { Button } from "./button";
import NAV_ROUTES from "../../config"

const HeaderSheet = () => {
    return(
        <div className="sm:hidden flex">
            <Sheet>
                <SheetTrigger><Menu className="w-12 h-10"/></SheetTrigger>
                <SheetContent side={"left"} className="w-[300px]">
                    <div className="mb-10">
                        <h1 className="text-5xl text-center font-extrabold">Crystal</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        {NAV_ROUTES.map((item, i) => (
                            <Button variant={"ghost"} className="flex justify-between"><span>{item.name}</span><Camera /><span></span></Button>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default HeaderSheet;