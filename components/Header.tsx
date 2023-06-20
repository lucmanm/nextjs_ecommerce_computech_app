import React from "react";
import { CustomButton, TopNavigation } from "@/components";
import Image from "next/image";
import { logoUrl } from "@/constant";
import Link from "next/link";

const Header = () => {

  // Destructuring Array of Logo
  const [,{title, url}] = logoUrl;
  return (
    <header className="border-b bg-slate-100">
      <TopNavigation />
      <div className="bg-white p-2">

      <div className="dt:container flex flex-wrap gap-2 bg-whi">
        <div>
          <Link href="/">
            <Image src={url} width={150} height={0} alt={title}/>
          </Link>
        </div>
        <div>
          <input type="search" placeholder="search"/>
        </div>
        <div>Category</div>
        <div>Brand</div>
        <div>icon</div>
      </div>

      </div>
    </header>
  );
};

export default Header;
