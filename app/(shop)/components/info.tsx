import { MessageCircle } from "lucide-react";

import { Brand, Product } from "@/types/table-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TProduct } from "@/types/type";

type InfoProps = {
  prodoctData: TProduct
};

const Info: React.FC<InfoProps> = ({ prodoctData }) => {
  return (
    <div className="flex flex-col justify-between md:h-full">
      <div className="">
        {/* LogoBrand Display */}
        {/* <Image
          src={brand.imageUrl}
          width={48}
          height={48}
          alt={brand.brand}
          className="rounded-md"
        /> */}
        <h1 className="h1 text-base font-bold text-gray-900">{prodoctData.description}</h1>
        <h2 className="text-sm text-gray-900 lg:text-xl">Model No: {prodoctData.model}</h2>
      </div>
      <div className="w-full">
        <hr className="my-4" />
        <Button
          className={cn(`w-full items-center gap-2 rounded-full py-6 text-lg`)}
        >
          <MessageCircle size={20} />
          Contact #: 056 261 7554
        </Button>
      </div>
    </div>
  );
};

export default Info;
