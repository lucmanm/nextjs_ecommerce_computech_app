import { prisma } from "@/lib/db";

import ClientBrand from "./_components/client";
import { formatter } from "@/lib/utils";
import { ProductColumnProps } from "@/types";
export const revalidate = 0;
const ProductsPage = async () => {
  const products = await prisma.product.findMany({
    include: {
      brand: true,
      category: true,
    },
  });

  const formattedproducts: ProductColumnProps[] = products.map((item) => ({
    id: item.id,
    model: item.model,
    description: item.description,
    price: item.price.toString(),
    salePrice: item.salePrice.toString(),
    stock: item.stock,
    brand: item.brand.brandName,
    category: item.category.categoryName,
    createdAt: new Date(item.createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));

  return <ClientBrand data={formattedproducts} />;
};

export default ProductsPage;
