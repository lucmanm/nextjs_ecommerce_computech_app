import React from "react";
import Link from "next/link";

export type Item = {
    text: string;
    slug?: string;
};

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
    return (
        <div className="flex flex-wrap items-center gap-2 text-base font-normal capitalize">
            {items.map((item) => (
                <div key={path + item.slug}>
                    <Link href={{ pathname: item.slug }}>{item.text}</Link>
                </div>
            ))}
        </div>
    );
};
