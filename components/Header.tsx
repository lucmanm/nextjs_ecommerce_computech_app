import {
  CustomButton,
  TopNavigation,
  DropdownMenu,
  SearchInput,
} from "@/components";
import Image from "next/image";
import { logoUrl, categories } from "@/constant";
import Link from "next/link";

const Header = () => {
  // Destructuring Array of Logo
  const [, { title, url }] = logoUrl;
  // Destrcucturing Product categories & Brand List
  const [
    { title: productTitle, list: productList },
    { title: brandTitle, list: brandList },
  ] = categories;

  return (
    <header className="border-b bg-slate-100 tb:shadow-md  ">
      <TopNavigation />
      <div className="bg-white p-2">
        <div className="flex flex-wrap gap-4 border border-black dt:container">
          <div className=" border border-black">
            <Link href="/">
              <Image src={url} width={150} height={0} alt={title} />
            </Link>
          </div>
          <div className="flex-1  border border-black">
            <SearchInput />
          </div>
          <div className="place-self-center  border border-black">
            <DropdownMenu title={productTitle} list={productList} />
          </div>
          <div className=" place-self-center  border border-black">
            <DropdownMenu title={brandTitle} list={brandList} />
          </div>
          <div className=" place-self-center border border-black">
            <CustomButton btnType="button" icon="/heart.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
