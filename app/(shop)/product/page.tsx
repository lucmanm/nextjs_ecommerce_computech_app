import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

export const metadata = {
  title: "Product NAme",
  description: "the Product Description",
};
export default function ProductPreview() {
  return (
    <main className="mx-4 my-8 grid grid-cols-12 gap-x-6 gap-y-6 dt:container  tb:mx-auto">
      <div className=" col-span-12">
        <Breadcrumb />
      </div>
      <div className=" col-span-full bg-blue-950 dt:col-span-5">
        Product Image Preview
      </div>
      <div className="col-span-full bg-blue-950 dt:col-span-7">
        Short Description
      </div>
      <div className="col-span-full bg-blue-950 dt:col-span-12">
        product Details
      </div>
    </main>
  );
}
