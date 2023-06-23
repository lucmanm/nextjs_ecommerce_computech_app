import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="mx-auto my-8 flex w-60 flex-col gap-3 overflow-hidden rounded-lg bg-white p-2 shadow-md dt:p-3">
      <div className="">
        <Image
          src="/aioimg.jpg"
          width={500}
          height={500}
          alt="all in One Image"
        />
      </div>
      <div>
        <h3 className="line-clamp-2 text-sm tb:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque
          sint cumque ab dolore blanditiis laborum neque magni debitis corporis
          quisquam nam, deleniti, ut animi repellendus nemo aperiam. Alias,
          sequi.
        </h3>
      </div>
      <div className="flex border border-black">
        <span className="inline-block self-end font-medium">SR</span>
        <h2 className=" to-blue-950 text-3xl font-semibold">0,000</h2>
      </div>
      <div className="flex space-x-4">
        <button className="border border-black">ICON</button>
        <button className="border border-black">ICON</button>
        <button className="border border-black">ICON</button>
      </div>
    </div>
  );
};

export default Product;
