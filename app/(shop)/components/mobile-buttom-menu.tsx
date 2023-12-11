import { Boxes, Home, HomeIcon, Menu, ShoppingCart } from "lucide-react";
import React from "react";
import SheetSide from "./sheet-side";
import Link from "next/link";
import ShopSheet from "./sheets/shop-sheet";
import CartSheet from "./sheets/cart-sheet";

export const MobileButtomMenu = () => {
  return (
    <div className="fixed bottom-4 left-0 z-20 h-16 w-full rounded-full border-t px-4 hover:rounded-full  2xl:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-4 overflow-hidden rounded-full  bg-white font-medium ">
        <div className="group inline-flex flex-col items-center justify-center border-x border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
          <Link href="/" className="hover:bg-blue-950 hover:text-white rounded-full p-2">
          <Home />
          </Link>
          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Home
          </span>
        </div>

        <div
          className="group inline-flex flex-col items-center justify-center border-r border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <ShopSheet />
          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Shop
          </span>
        </div>
        <div
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <CartSheet />
          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Cart
          </span>
        </div>
        <div
          className="group inline-flex flex-col items-center justify-center  border-x border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
        >
          <SheetSide />
          <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
            Menu
          </span>
        </div>
      </div>
    </div>
  );
};
