import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="container">
      <div >
        <div
          style={{
            backgroundImage:
              "url(https://images.wallpaperscraft.com/image/single/camera_lens_dark_134364_1920x1080.jpg)",
          }}
          className="rounded-lg cover bg-cover py-52 px-32 overflow-hidden bg-center flex lg:justify-start justify-center"
        >
          <div className="absolute inset-0 flex justify-center items-end lg:justify-start lg:items-center lg:ml-20">
            <div className="flex flex-col">
              <h1 className="hidden lg:block text-slate-200 text-4xl font-extrabold text-center py-4">Upto 30% off</h1>
              <Button
                className="bg-slate-200 hover:bg-transparent hover:text-white active:bg-slate-200 active:text-black lg:px-20 lg:py-4  mb-10 lg:mb-0"
                variant={"ghost"}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
