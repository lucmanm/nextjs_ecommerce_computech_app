"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoryProps {
  id: number;
  category: string;
}

interface DropdownMenuProps {
  title: string;
  categories: CategoryProps[];
}

const DropdownMenu = ({ title, categories }: DropdownMenuProps) => {
  const pathname = usePathname();
  return (
    //issue #1: required to get notfound if the folder router is not equal
    <div className="group relative z-20">
      <div className="grow rounded-full bg-gray-100 px-4 py-1.5 text-center font-bold uppercase text-blue-950 shadow hover:cursor-pointer hover:bg-blue-950 hover:text-white">
        <span>{title}</span>
      </div>
      <div className="hidden grow group-hover:block group-focus:visible">
        <div className="absolute top-full flex w-fit grow flex-col overflow-hidden rounded pt-3 shadow-md">
          {categories?.map(({ id, category }: CategoryProps) => (
            <Link
              key={id}
              href={`${pathname}${id}`}
              className="white w-full whitespace-pre border border-b-gray-300 bg-gray-200 px-2 py-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black"
            >
              <span className="capitalize">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
