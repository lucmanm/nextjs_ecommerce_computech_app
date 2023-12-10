"use client"
import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CategoryProps {
  id: number;
  category: string;
}

interface DropdownMenuProps {
  title: string;
  categories: CategoryProps[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, categories }) => {
  const router = useRouter()
  const handleClick = (path: string) =>{
    router.push(`/product/${path}`)
  }
  return (
    <div className="group relative z-50">
      <div className="grow rounded-full bg-gray-100 px-4 py-1.5 text-center font-bold uppercase text-blue-950 shadow hover:cursor-pointer hover:bg-blue-950 hover:text-white">
        <span>{title}</span>
      </div>
      <div className="hidden grow group-hover:block group-focus:visible">
        <div className="absolute top-full flex w-fit grow flex-col overflow-hidden rounded pt-3 shadow-md">
          {categories?.map((data, index) => (
            <button onClick={() => handleClick(data.category)}
              key={index}
              // href={`/product/${data.category}`}
              className="w-full whitespace-pre border border-b-gray-300 bg-gray-200 px-2 py-2 font-medium capitalize text-gray-600 hover:bg-gray-100 hover:text-black"
            >
              {data.category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
