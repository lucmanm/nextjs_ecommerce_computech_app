import { prisma } from "@/lib/db";

import ClientBrand from "./components/client";

// Type & Schema
import { categorySchema } from "@/types/validation";
import { TCategory } from "@/types/type";

const CategoryPage = async () => {

  const categories = await prisma.category.findMany();

  const formattedcategories: TCategory[] = categories.map((item) => (
    categorySchema.parse(item)
  )
  );

  return <ClientBrand data={formattedcategories} />
};

export default CategoryPage;
