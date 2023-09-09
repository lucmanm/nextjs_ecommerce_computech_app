import { prisma } from "@/lib/db";

import { notFound } from "next/navigation";
import { BrandForm } from "./components/category-form";

interface SliderProps {
  params: {
    categoryID: string;
  };
}
const CategoryPage: React.FC<SliderProps> = async ({ params }) => {
  if (params.categoryID === "create") {
    return <BrandForm initialData={null} />;
  }

  const category = await prisma.category.findFirst({
    where: {
      id: params.categoryID,
    },
  });

  if (!category) {
    notFound();
  }

  return <BrandForm initialData={category} />;
};

export default CategoryPage;
