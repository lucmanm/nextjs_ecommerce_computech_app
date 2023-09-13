import { prisma } from "@/lib/db";

import { ProductColumnProps } from "./components/columns";
import ClientBrand from "./components/client";
import { formatter } from "@/lib/utils";

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
    stock: item.stock,
    brand: item.brand.brand,
    category: item.category.category,
    createdAt: new Date(item.createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));

  return <ClientBrand data={formattedproducts} />;
};

export default ProductsPage;
