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
            icons: <UserCircle size={20} />,
            path: "/my-account"
        },
        {
            name: "Orders",
            icons: <ShoppingBagIcon size={20}/>,
            path: "/my-account/orders"
        },
        {
            name: "WishList",
            icons: <Heart  size={20}/>,
            path: "/my-account/wishlist"
        },
        {
            name: "Address Book",
            icons: <MapPin size={20}/>,
            path: "/my-account/addressbook"
        }
    ]
    return ( 
        <div className="flex flex-col gap-y-4">
            <ProfileCard/>
            <div className="rounded-md overflow-hidden shadow-md bg-white border-y-2 border-y-blue-950 divide-y-2">
            {
                sideMenu.map((data, index) => (
                    <Link href={data.path} key={index} >
                        <div 
                        className={`flex hover:text-white items-center space-x-2 px-3 py-2 font-semibold devide-y-[2px] capitalize hover:bg-blue-500 ${pathname === data.path ? "bg-blue-950 text-white" : "bg-none"}`}>

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