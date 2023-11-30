import CustomButton from "@/components/CustomButton";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { logoUrl } from "@/lib/constant";
import Link from "next/link";
import { getProductCategory } from "@/lib/actions/getCategory";
import DropdownMenu from "./DropdownMenu";
import SideBarModal from "./sidebar-modal";

const Header = async () => {
  const categories = await getProductCategory();

  // Destructuring ArrafetchProductsy of Logo
  const [, { title, url }] = logoUrl;

  return (
    <header className="border-b bg-slate-100 md:shadow-md  ">
      {/* <TopNavigation/> */}
      <div className="bg-white p-2">
        <div className="container flex flex-wrap items-center justify-between  gap-4">
          <div className="self-center">
            <Link href="/">
              <Image src={url} width={150} height={0} alt={title} />
            </Link>
          </div>
          <div className="flex-1">
            <SearchInput />
          </div>
          <div className="flex items-center justify-center gap-x-2">
            {/* Product Category Menu */}
            <DropdownMenu title="All Category" categories={categories} />
            <SideBarModal />
          </div>
          {/* Brands Menu */}

          <div className="hidden">
            <CustomButton btnType="button" icon="/heart.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
