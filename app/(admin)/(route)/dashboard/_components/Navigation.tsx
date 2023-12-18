import { cn } from "@/lib/utils";
import React from "react";
import UserMenu from "./user-menu";
import { Bell, Globe } from "lucide-react";
import Link from "next/link";
import Notification from "./notification";

type NavgiationProps = {
  className: string;
};

const Navigation: React.FC<NavgiationProps> = ({ className }) => {
  return (
    <nav className={cn("flex  justify-between p-4", className)}>
      <Link href="/" className="flex space-x-2 bg-slate-100 rounded-md p-2 hover:bg-blue-950 hover:text-white">
        <Globe size={18}/><p className="font-normal  text-sm">Visit Shop</p>
      </Link>
      <div className="flex items-center justify-center gap-x-2">

      <Notification/>
      <UserMenu />
      </div>
    </nav>
  );
};

export default Navigation;
