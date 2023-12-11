import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getProductCategory } from "@/lib/actions/getCategory";
import { TCategory } from "@/types/type";
import { Menu } from "lucide-react";


const SheetSide = async () => {

  const categoryData:  TCategory[]= await getProductCategory()
  
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden rounded-full p-2 hover:bg-blue-950 hover:text-white">
        <Menu />
      </SheetTrigger>
      <SheetContent className="max-w-xs">
        <SheetHeader>
          <SheetTitle>Category Menu</SheetTitle>
          {categoryData?.map((data, index) => (
            <SheetDescription key={index} asChild className="text-left hover:bg-blue-950 hover:text-white py-1 px-2 capitalize rounded-md">
              <a href={`/product/${data.category}`}>{data.category}</a>
            </SheetDescription>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetSide;
