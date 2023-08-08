"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dashboardSidebar } from "@/lib/constant";
import CustomButton from "../CustomButton";
import { useParams, usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="text- relative h-screen space-y-8 overflow-hidden bg-white p-2 shadow-sm">
            {/* SideBar header Menu */}
            <div className="flex items-center justify-between border-black py-2 pr-1">
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
                        height={24}
                        width={24}
                    />
                </CustomButton>
            </div>
            <div>
                {/* Sidebar Menu Pages*/}
                {dashboardSidebar.map((link) => (
                    <div key={link.title} className="space-y-2">
                        <p className="rounded px-2 py-2 font-semibold uppercase text-blue-950">
                            {link.title}
                        </p>
                        {/* Sub Category pages. */}
                        {link.links.map((link) => (
                            <Link
                                key={link.name}
                                href={`${link.url}`}
                                className={`${
                                    pathname === link.url
                                        ? "flex items-center gap-2 rounded-md bg-gradient-to-br from-red-400 via-red-500 to-red-600 py-2 pl-5 text-white"
                                        : "flex items-center gap-2 rounded-md py-2 pl-5 font-light capitalize  hover:bg-gradient-to-br hover:from-red-400 hover:via-red-500 hover:to-red-600 hover:text-white"
                                }`}>
                                <Image
                                    src={link.icon}
                                    alt="icon"
                                    height={16}
                                    width={16}
                                />
                                <span className="capatilize font-medium">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
