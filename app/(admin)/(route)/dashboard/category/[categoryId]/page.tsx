import { prisma } from "@/lib/db";

import { notFound } from "next/navigation";
import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({ params }: {params: {categoryId: string}}) => {
  
  if (params.categoryId === "create") {
    return <CategoryForm initialData={null} />;
  }

  const categoryData = await prisma.category.findFirst({
    where: {
      categoryId: params.categoryId,
    },
  });

  if (!categoryData) {
    notFound();
  }

  return <CategoryForm initialData={categoryData} />;
};

export default CategoryPage;
