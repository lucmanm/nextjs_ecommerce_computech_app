import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { logoUrl } from "@/lib/constant";
import Link from "next/link";
import { getProductCategory } from "@/lib/actions/getCategory";
import DropdownMenu from "./DropdownMenu";
import SearchInput from "./SearchInput";
import { cn } from "@/lib/utils";
import SheetSide from "./sheets/menu-sheet";
import { Suspense } from "react";
import { UserCircle2 } from "lucide-react";

type HeaderProps = {
  className?: string;
};
function SearchBarFallback() {
  return <>placeholder</>;
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
        <div className="flex flex-wrap items-center justify-between space-x-4 px-3 lg:container lg:px-0">
          {/* Side menu */}
          <SheetSide className="rounded-full p-2 hover:bg-blue-950 hover:text-white" />
          <div className="self-center">
            <Link href="/">
              <Image
                src={url}
                width={150}
                height={0}
                alt={title}
                className="hidden lg:block"
              />
              <Image
                src="/logo-2x2.png"
                width={42}
                height={0}
                alt={title}
                className="lg:hidden"
              />
            </Link>
          </div>
          <div className="flex-1">
            <Suspense fallback={<SearchBarFallback />}>
              <SearchInput />
            </Suspense>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            {/* Product Category Menu */}
            <DropdownMenu title="All Category" categories={categories} />
            {/* <SideBarModal /> */}
          </div>
          {/* Brands Menu */}
          <Link href="/my-account/wishlist">
            <CustomButton btnType="button" icon="/heart.svg" />
          </Link>
          <Link href="/sign-in">
            <UserCircle2 size={32} className="hover:text-white hover:bg-blue-950 hover:cursor-pointer rounded-full"/>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
