"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types/table-types";
import { Button } from "@/components/ui/button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.description}</h1>
      <div className="mt-3 flex items-end justify-between">
        <h2 className="text-xl text-gray-900"> Model No: {data.model}</h2>
      </div>
      <hr className="my-4" />
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex w-full items-center gap-2 py-6 text-lg">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
