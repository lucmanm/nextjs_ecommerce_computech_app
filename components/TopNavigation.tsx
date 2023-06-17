import { topNavigationMenu } from "@/constant";
import { TopNavigationProps } from "@/types";
import Image from "next/image";
import React from "react";

const TopNavigation = ({
  title,
  url,
  imageSrc,
  altImage,
}: TopNavigationProps) => {
  return (
    <div className="relative dt:container flex flex-wrap justify-between">
      <div className="flex">
        {topNavigationMenu.map(({ title, url, imageSrc, altImage }) => (
          <div key={title} className="p-2 border flex font-medium gap-x-2">
            <Image src={imageSrc} width={18} height={18} alt={altImage} />
            <span>{title}</span>
          </div>
        ))}
      </div>
      <div className="p-2">Language</div>
    </div>
  );
};

export default TopNavigation;
