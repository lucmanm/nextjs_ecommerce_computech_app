import React from "react";
import { cn } from "@/lib/utils";
import { TBrand } from "@/types/type";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

type PorductsFilters = {
  data: TBrand[];
  className: string;
};

const PorductsFilters: React.FC<PorductsFilters> = ({ className, data }) => {
  return (
    <div className={cn("rounded-md border bg-white p-2 shadow", className)}>
      <h3 className="h3">Filter Products</h3>
      <Separator />
      {data.map((data, index) => (
        <div
          key={index}
          className="my-2 flex items-center space-x-2 font-semibold capitalize"
        >
          <Checkbox
            value={data.brandName}
            className="border-blue-950 bg-slate-200 active:bg-blue-950"
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {data.brandName}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PorductsFilters;
