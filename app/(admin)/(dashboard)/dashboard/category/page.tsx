import { prisma } from "@/lib/db";

import ClientBrand from "./components/client";
import { z } from "zod";
import { CategoryColumnProps } from "@/types";

const CategoryPage = async () => {

  const categories = await prisma.category.findMany();

  const sliderSchema = z.object({
    id: z.string(),
    category: z.string(),
    createdAt: z.date().transform((date) => date.toLocaleDateString()),
  });

  const formattedcategories: CategoryColumnProps[] = categories.map((item) =>
    sliderSchema.parse(item)
  );

  return <ClientBrand data={formattedcategories} />
};

export default CategoryPage;
