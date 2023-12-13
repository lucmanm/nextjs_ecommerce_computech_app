"use client"
import Link from "next/link";
import ProfileCard from "./profile-card";
import { usePathname } from "next/navigation";
import { Heart, MapPin, ShoppingBagIcon,  UserCircle } from "lucide-react";

const SideBarMenu =  () => {
    const pathname = usePathname()
    const sideMenu = [
        {
            name: "Profile",
            icons: <UserCircle size={24} />,
            path: "/my-account"
        },
        {
            name: "Orders",
            icons: <ShoppingBagIcon size={24}/>,
            path: "/my-account/orders"
        },
        {
            name: "WishList",
            icons: <Heart  size={24}/>,
            path: "/my-account/wishlist"
        },
        {
            name: "Address Book",
            icons: <MapPin size={24}/>,
            path: "/my-account/address-book"
        }
    ]
    return ( 
        <div className="flex flex-col gap-y-2">
            <ProfileCard/>
            <div className="border border-blue-950 rounded-md">

            {
                sideMenu.map((data, index) => (
                    <Link href={data.path} key={index} >
                        <div 
                        className={`flex hover:text-white items-center space-x-2 px-3 py-2 font-semibold capitalize hover:bg-blue-500 ${pathname === data.path ? "bg-blue-950 text-white" : "bg-none"}`}>

                        <span>{data.icons}</span><p>{data.name}</p>
                        </div>
                    </Link>
               ))
            }      
            </div>
        </div>
     )
}
 
export default SideBarMenu;