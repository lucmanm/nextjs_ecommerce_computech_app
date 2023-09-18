"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../../../components/CustomButton";
import { usePathname } from "next/navigation";
import {
  BadgePlus,
  ChevronLeftCircle,
  Clapperboard,
  LayoutDashboard,
  Projector,
  Settings,
  SquareStack,
  Trello,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SideBarLabels = [
  {
    title: "Dashboard",
    links: [],
  },
  {
    title: "Products",
    links: [
      {
        name: "Products",
        icon: <LayoutDashboard />,
        url: "/dashboard/products",
      },
      {
        name: "Create Product",
        icon: <BadgePlus />,
        url: "/dashboard/products/create",
      },
    ],
  },
  {
    title: "Categories",
    links: [
      {
        name: "Category List",
        icon: <SquareStack />,
        url: "/dashboard/category",
      },
      {
        name: "Create Category",
        icon: <BadgePlus />,
        url: "/dashboard/category/create",
      },
    ],
  },

  {
    title: "Brands",
    links: [
      {
        name: "Brands",
        icon: <Trello />,
        url: "/dashboard/brands",
      },
      {
        name: "Create Brand",
        icon: <BadgePlus />,
        url: "/dashboard/brands/create",
      },
    ],
  },
  {
    title: "Shop Settings",
    links: [
      {
        name: "Slider",
        icon: <Projector />,
        url: "/dashboard/sliders",
      },
      {
        name: "Banners",
        icon: <Clapperboard />,
        url: "/dashboard/banners",
      },

      {
        name: "Settings",
        icon: <Settings />,
        url: "/dashboard/settings",
      },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-white transition-all duration-500  ease-in-out${
        isOpen ? "w-12 p-1" : "w-72 shrink-0 p-2"
      } `}
    >
      {/* SideBar header Menu */}
      <div className="flex w-full items-center justify-between border-black p-2">
        <Link href="/dashboard" className={`${isOpen && "hidden"}`}>
          <Image
            src={`/computech-landscape-logo.png`}
            alt="computech logo"
            height={24}
            width={110}
          />
        </Link>
        <Button
          className={`rounded-full ${
            isOpen ? "rotate-180 transition-all duration-500" : ""
          }`}
          variant="ghost"
          onClick={clickHandler}
          size="icon"
        >
          <ChevronLeftCircle />
        </Button>
        {/* <CustomButton btnType="button" clickHandler={clickHandler}>
          <Image
            src={`/default/burger.svg`}
            alt="burger menu"
            height={24}
            width={24}
          />
        </CustomButton> */}
      </div>
      <div>
        {/* Sidebar Menu Pages*/}
        {SideBarLabels.map((link) => (
          <div key={link.title} className="space-y-2">
            <p
              className={`rounded px-2 py-2 font-semibold uppercase text-blue-950 ${
                isOpen && "hidden"
              }`}
            >
              {link.title}
            </p>
            {/* Sub Category pages. */}
            {link.links.map((link) => (
              <Link
                key={link.name}
                href={`${link.url}`}
                className={`flex items-center gap-2 truncate  rounded-md py-2 pl-3 font-light capitalize ${
                  pathname === link.url
                    ? " bg-blue-950 text-white"
                    : " hover:bg-blue-600 hover:text-white"
                }`}
              >
                <div>{link.icon}</div>
                <span
                  className={`capatilize font-medium ${isOpen && "hidden"}`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
