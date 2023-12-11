import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { logoUrl } from "@/lib/constant";
import Link from "next/link";
import { getProductCategory } from "@/lib/actions/getCategory";
import DropdownMenu from "./DropdownMenu";
import SideBarModal from "./sidebar-modal";
import SearchInput from "./SearchInput";
import { cn } from "@/lib/utils";
import SheetSide from "./sheet-side";
import { Suspense } from "react";

type HeaderProps = {
  className?: string;
};
function SearchBarFallback(){
  return <>placeholder</>
}
const Header: React.FC<HeaderProps> = async ({ className }) => {
  const categories = await getProductCategory();
  // Destructuring ArrafetchProductsy of Logo
  const [, { title, url }] = logoUrl;

  return (
    <header
      className={cn("sticky border-b bg-slate-100 md:shadow-md", className)}
    >
      {/* <TopNavigation/> */}
      <div className="bg-white py-2">
        <div className="lg:container flex flex-wrap items-center justify-between space-x-4 px-2 lg:px-0">
          <div className="self-center">
            <Link href="/">
              <Image src={url} width={150} height={0} alt={title}  className="hidden lg:block"/>
              <Image src="/logo-2x2.png" width={42} height={0} alt={title}  className="lg:hidden"/>
            </Link>
          </div>
          <div className="flex-1">
          <Suspense fallback={<SearchBarFallback/>}>
            <SearchInput />
          </Suspense>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            {/* Product Category Menu */}
            <DropdownMenu title="All Category" categories={categories} />
            {/* <SideBarModal /> */}

            {/* Side menu */}
            <SheetSide />
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
