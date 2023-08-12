import  CustomButton  from "@/components/CustomButton";
import  TopNavigation  from "@/components/TopNavigation";
import  DropdownMenu  from "@/components/DropdownMenu";
import  SearchInput  from "@/components/SearchInput";
import Image from "next/image";
import { logoUrl, categories } from "@/lib/constant";
import Link from "next/link";

export default function Header() {
  // Destructuring Array of Logo
  const [, { title, url }] = logoUrl;

  // Destrcucturing Product categories & Brand List
  const [
    { title: productTitle, list: productList },
    { title: brandTitle, list: brandList },
  ] = categories;

  return (
    <header className="tb:shadow-md border-b bg-slate-100  ">
      <TopNavigation />
      <div className="bg-white p-2">
        <div className="container flex flex-wrap items-center justify-between  gap-4">
          <div className="self-center">
            <Link href="/">
              <Image src={url} width={150} height={0} alt={title} />
            </Link>
          </div>
          <div className=" flex-1">
            <SearchInput />
          </div>
          <div className="">
            <DropdownMenu title={productTitle} list={productList} />
          </div>
          <div className="">
            <DropdownMenu title={brandTitle} list={brandList} />
          </div>
          <div className="">
            <CustomButton btnType="button" icon="/heart.svg" />
          </div>
        </div>
      </div>
    </header>
  );
}
