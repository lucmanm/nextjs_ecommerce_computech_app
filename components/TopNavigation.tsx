import { topNavigationMenu } from "@/lib/constant";
import { TopNavigationProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const TopNavigation = ({
    title,
    url,
    imageSrc,
    altImage,
}: TopNavigationProps) => {
    return (
      <div className="relative flex flex-wrap justify-between container ">
        <div className="flex">
          {topNavigationMenu.map(({ title, url, imageSrc, altImage }) => (
            <div key={title}>
              <Link href={url} className="flex gap-x-2 p-2">
                <Image src={imageSrc} width={18} height={18} alt={altImage} />
                <span>{title}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-x-2 p-2">
          <Image src="language.svg" width={18} height={18} alt="language" />
          <span>langage</span>
        </div>
      </div>
    );
};

export default TopNavigation;
