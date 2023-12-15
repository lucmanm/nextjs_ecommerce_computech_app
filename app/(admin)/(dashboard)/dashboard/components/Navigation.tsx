import { cn } from "@/lib/utils";
import React from "react";

type NavgiationProps = {
  className: string
}


const Navigation : React.FC<NavgiationProps>= ({className}) => {
  return (
    <nav className={cn("h-16",className)}>
      Navgiation
    </nav>
  );
};

export default Navigation;
