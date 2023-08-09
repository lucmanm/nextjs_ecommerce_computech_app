"use client";

import type { Item } from "@/components/ui/TabGroup";
import Link from "next/link";

export const Tab = ({ path, item }: { path: string; item: Item }) => {
    const href = item.slug ? path + "/" + item.slug : path;

    return (
        <Link
            href={href}
            className={
                "bg-vercel-blue rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium  capitalize text-white hover:bg-gray-500 hover:text-white"
            }>
            {item.text}
        </Link>
    );
};
