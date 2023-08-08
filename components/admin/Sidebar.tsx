"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dashboardSidebar } from "@/lib/constant";
import CustomButton from "../CustomButton";

const Sidebar = () => {
  return (
    <aside className="text- relative h-screen space-y-2 overflow-hidden bg-white p-2 shadow-sm">
      {/* SideBar header Menu */}
      <div className="flex items-center justify-between border-black">
        <Link href="/" onClick={() => {}}>
          <Image
            src={`/computech-landscape-logo.png`}
            alt="computech logo"
            height={24}
            width={110}
          />
        </Link>
        <CustomButton btnType="button">
          <Image
            src={`/default/burger.svg`}
            alt="burger menu"
            height={32}
            width={32}
          />
        </CustomButton>
      </div>
      <div>
        {/* Sidebar Menu Pages*/}
        {dashboardSidebar.map((link) => (
          <div key={link.title}>
            <p className="rounded px-2 py-2 font-semibold uppercase text-blue-950">
              {link.title}
            </p>
            {/* Sub Category pages. */}
            {link.links.map((link) => (
              <Link
                key={link.name}
                href={`${link.url}`}
                className="flex items-center gap-2 rounded py-2 pl-5 font-light capitalize  text-blue-950 hover:bg-gradient-to-br from-red-400 via-red-500 to-red-600 "
              >
                <Image src={link.icon} alt="icon" height={16} width={16} />
                <span className="capatilize font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
