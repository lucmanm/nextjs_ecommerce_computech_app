import { TBrand } from "@/types/type";


interface DropdownMenuProps {
  title: string;
  brandData: TBrand[];
}

const BrandDropdownMenu: React.FC<DropdownMenuProps> = ({ title, brandData }) => {

  return (
    <div className="group relative z-20 lg:block hidden hover:shadow rounded-full">
      <div className="grow rounded-full bg-gray-100 px-4 py-1.5 text-center font-bold uppercase text-blue-950  hover:cursor-pointer hover:bg-blue-950 hover:text-white active:bg-blue-950">
        <span>{title}</span>
      </div>
      <div className="hidden grow group-hover:block group-focus:visible">
        <div className="absolute top-full flex w-fit grow flex-col overflow-hidden rounded pt-3 shadow-md ">
          {brandData?.map((data, index) => (
            <a href={`/product/${data.brandName}`}
              key={index}
              className="w-full whitespace-pre border border-b-gray-300 bg-gray-200 px-2 py-2 font-medium capitalize text-gray-600 hover:bg-gray-100 hover:text-black z-50"
            >
              {data.brandName}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDropdownMenu;
