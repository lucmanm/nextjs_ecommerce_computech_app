import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {  ShoppingBag } from "lucide-react";

const ShopSheet = () => {
    return ( 
        <Sheet>
        <SheetTrigger className="lg:hidden rounded-full p-2 hover:bg-blue-950 hover:text-white">
          <ShoppingBag />
        </SheetTrigger>
        <SheetContent className="max-w-full max-h-full" side="top">
          <SheetHeader>
            <SheetTitle className="text-left">Brands</SheetTitle>
              <SheetDescription >
                Description
              </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
     );
}
 
export default ShopSheet;