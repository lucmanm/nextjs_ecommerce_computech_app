import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
type MenuSheetProps ={
  className?: string
}
const CartSheet : React.FC<MenuSheetProps> = ({className}) => {
    return ( 
        <Sheet>
        <SheetTrigger className={cn("lg:hidden", className)}>
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