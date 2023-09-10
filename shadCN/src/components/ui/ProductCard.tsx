import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./card";

const ProductCard = () => {
  return (
    <Card className="hover:ring-1 hover:ring-black rounded-lg">
      <CardHeader className="flex items-center ">
        <div className="transition-all animation-2 hover:scale-125">
          <img
            className="p-10 md:p-5 lg:p-2"
            src="https://www.nikon.co.in/media/wysiwyg/products/cameras/mirrorless/nikon-z30/hp-feature-nikon-z30-nikon-cameras-lenses-accessories.jpg"
            alt="camera"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col">
        <span className="text-slate-800 font-extrabold text-lg">
          {" "}
          Nikon ex234{" "}
        </span>
        <span className="text-slate-600 m-0">Customizable</span>
      </CardContent>
      <CardFooter className="pt-1">
        <span className="text-3xl text-slate-900 font-extrabold">$689</span>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
