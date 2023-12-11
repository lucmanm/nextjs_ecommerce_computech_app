import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

const CartSheet = () => {
    return ( 
        <Sheet>
        <SheetTrigger className="lg:hidden rounded-full p-2 hover:bg-blue-950 hover:text-white">
          <ShoppingCart />
        </SheetTrigger>
        <SheetContent className="max-w-full max-h-full" side="right">
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
 
export default CartSheet;