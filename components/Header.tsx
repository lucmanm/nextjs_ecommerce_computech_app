import React from "react";
import { CustomButton, TopNavigation } from "@/components";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b bg-slate-100">
      <TopNavigation />
      <div className="dt:container flex flex-wrap gap-2">
        <div>
          <Image src={}/>
        </div>
        <div>
          <input type="search" placeholder="search"/>
        </div>
        <div>Category</div>
        <div>Brand</div>
        <div>icon</div>
      </div>

    </header>
  );
};

export default Header;
