import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getProductCategory } from "@/lib/actions/getCategory";
import { cn } from "@/lib/utils";
import { TCategory } from "@/types/type";
import { Menu } from "lucide-react";

type MenuSheetProps ={
  className?: string
}
const MenuSheet: React.FC<MenuSheetProps> = async ({className}) => {

  const categoryData:  TCategory[]= await getProductCategory()
  
  return (
    <Sheet>
      <SheetTrigger className={cn("lg:hidden", className)}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="max-w-xs">
        <SheetHeader>
          <SheetTitle>Category Menu</SheetTitle>
          {categoryData?.map((data, index) => (
            <SheetDescription key={index} asChild className="text-left hover:bg-blue-950 hover:text-white py-1 px-2 capitalize rounded-md">
              <a href={`/product/${data.categoryName}`}>{data.categoryName}</a>
            </SheetDescription>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
