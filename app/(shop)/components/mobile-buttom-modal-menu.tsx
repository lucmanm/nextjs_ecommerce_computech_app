import { Boxes, HomeIcon, Menu, ShoppingCart } from "lucide-react";
import React from "react";

export const MobileButtomMenu = () => {
  return (
    <div className="fixed bottom-4 left-0 z-50 h-16 w-full rounded-full border-t px-4 hover:rounded-full  2xl:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-4 overflow-hidden rounded-full  bg-white font-medium ">
        <button
          type="button"
          className="group inline-flex flex-col items-center justify-center border-x border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <HomeIcon />
          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Home
          </span>
        </button>

        <button
          type="button"
          className="group inline-flex flex-col items-center justify-center border-r border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <Boxes />
          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Category
          </span>
        </button>
        <button
          type="button"
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <ShoppingCart />

          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Cart
          </span>
        </button>
        <button
          type="button"
          className="group inline-flex flex-col items-center justify-center  border-x border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <Menu />
          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Menu
          </span>
        </button>
      </div>
    </div>
  );
};
