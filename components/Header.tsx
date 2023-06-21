import React from "react";
import { CustomButton, TopNavigation, CategoryMenu } from "@/components";
import Image from "next/image";
import { logoUrl } from "@/constant";
import Link from "next/link";

const Header = () => {
  // Destructuring Array of Logo
  const [, { title, url }] = logoUrl;
  return (
    <header className="border-b bg-slate-100 shadow-lg">
      <TopNavigation />
      <div className="bg-white p-2">
        <div className="dt:container flex flex-wrap gap-2 bg-whi">
          <div>
            <Link href="/">
              <Image src={url} width={150} height={0} alt={title} />
            </Link>
          </div>
          <div>
            <input type="search" placeholder="search" />
          </div>
          <div>Category</div>
          <div>Brand</div>
          <div>icon</div>
        </div>
<<<<<<< HEAD
        <div>
          <input type="search" placeholder="search"/>
        </div>
        <div>
          <CategoryMenu/>
        </div>
        <div>Brand</div>
        <div>icon</div>
      </div>

=======
>>>>>>> c7540a6c1c8605c97ca0a93c2c9f43d346687c15
      </div>
    </header>
  );
};

export default Header;
