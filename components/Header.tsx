import CustomButton from "@/components/CustomButton";
import TopNavigation from "@/components/TopNavigation";
import DropdownMenu from "@/components/DropdownMenu";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { logoUrl, categories } from "@/lib/constant";
import Link from "next/link";

async function fetchProductCategory() {
  const res = await fetch("http://localhost:3000/api/category");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.productCategory;
}
async function getBrand() {
  const res = await fetch("http://localhost:3000/api/brand");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.brand;
}





const Header = async () => {
  const productCategories = await fetchProductCategory();
  const brand = await getBrand();

  
  // Destructuring ArrafetchProductsy of Logo

  const [, { title, url }] = logoUrl;

  // Destrcucturing Product categories & Brand List
  const [
    { title: productTitle, list: productList },
    { title: brandTitle, list: brandList },
  ] = categories;

  return (
    <header className="tb:shadow-md border-b bg-slate-100  ">
      {/* <TopNavigation/> */}
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
            {/* Product Category Menu */}
            <DropdownMenu
              title="Category"
              productCategories={productCategories}
            />
          </div>
          {/* Brands Menu */}
          <div className="">
            <DropdownMenu title="Brand" productCategories={brand} />
            {/* <DropdownMenu title={brandTitle} list={brandList} /> */}
          </div>
          <div className="">
            <CustomButton btnType="button" icon="/heart.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
