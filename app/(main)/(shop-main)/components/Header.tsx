import CustomButton from "@/components/CustomButton";
import DropdownMenu from "@/app/(main)/(shop-main)/components/DropdownMenu";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { logoUrl } from "@/lib/constant";
import Link from "next/link";
import { getProductCategory } from "@/lib/actions/getCategory";

const Header = async () => {
    const categories = await getProductCategory();

    // Destructuring ArrafetchProductsy of Logo
    const [, { title, url }] = logoUrl;

    return (
        <header className="tb:shadow-md border-b bg-slate-100  ">
            {/* <TopNavigation/> */}
            <div className="bg-white p-2">
                <div className="container flex flex-wrap items-center justify-between  gap-4">
                    <div className="self-center">
                        <Link href="/">
                            <Image
                                src={url}
                                width={150}
                                height={0}
                                alt={title}
                            />
                        </Link>
                    </div>
                    <div className=" flex-1">
                        <SearchInput />
                    </div>
                    <div className="">
                        {/* Product Category Menu */}
                        <DropdownMenu
                            title="All Category"
                            categories={categories}
                        />
                    </div>
                    {/* Brands Menu */}

                    <div className="">
                        <CustomButton btnType="button" icon="/heart.svg" />
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
