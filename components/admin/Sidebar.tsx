"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dashboardSidebar } from "@/lib/constant";

const Sidebar = () => {
  return (
    <aside className="relative h-screen space-y-2 overflow-hidden p-2 text- shadow-sm bg-blue-950">
      {/* SideBar header Menu */}
      <div className="flex items-center justify-between border-black">
        <Link href="/" onClick={() => {}} className="border border-black">
          {/* <Image
                        src={`/computech-landscape-logo.png`}
                        alt="computech logo"
                        fill
                        style={{ objectFit: "contain" }}
                    /> */}
        </Link>
        <button type="button" onClick={() => {}}>
          <Image
            src={`/default/burger.svg`}
            alt="burger menu"
            height={24}
            width={24}
          />
        </button>
      </div>
      <div>
        {/* Sidebar Menu Pages*/}
        {dashboardSidebar.map((link) => (
          <div key={link.title}>
            <p className="rounded bg-blue-950 px-2 py-2 font-normal uppercase text-slate-100">
              {link.title}
            </p>
            {/* Sub Category pages. */}
            {link.links.map((link) => (
              <Link
                key={link.name}
                href={`${link.url}`}
                className="flex items-center gap-2 rounded py-2 pl-5 capitalize text-white hover:text-blue-950 hover:bg-slate-100 font-light"
              >
                <Image src={link.icon} alt="icon" height={16} width={16} />
                <span className="capatilize">{link.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
