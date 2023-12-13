import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {  ShoppingBag } from "lucide-react";
type ShopSheetProps ={
  className?: string
}
const ShopSheet: React.FC<ShopSheetProps> = ({className}) => {
    return ( 
        <Sheet>
        <SheetTrigger className={cn("lg:hidden", className)}>
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