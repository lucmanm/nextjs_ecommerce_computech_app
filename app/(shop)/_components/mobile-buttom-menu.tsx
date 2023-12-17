import { Home } from "lucide-react";
import SheetSide from "./sheets/menu-sheet";
import Link from "next/link";
import ShopSheet from "./sheets/shop-sheet";
import CartSheet from "./sheets/cart-sheet";
const menuData = [
  {
    name: "home",
    icon: <Link href="/"><Home className="inline-flex" /></Link>,
  },
  {
    name: "shop",
    icon: <ShopSheet />,
  },
  {
    name: "Cart",
    icon: <CartSheet />,
  },
  {
    name: "Menu",
    icon: <SheetSide />,
  },
];
export const MobileButtomMenu = () => {
  return (
    <div className="fixed bottom-2 left-0 flex h-16 w-full flex-nowrap items-center  overflow-hidden  rounded-full bg-blue-950 text-white xl:hidden z-10">
      {menuData.map((data, index) => (
        <div
          key={index}
          className="basis-1/4 p-2 text-center hover:bg-blue-500 hover:text-blue-950"
        >
          {data.icon}
          <p className="text-sm font-medium">{data.name}</p>
        </div>
      ))}
    </div>
  );
};
