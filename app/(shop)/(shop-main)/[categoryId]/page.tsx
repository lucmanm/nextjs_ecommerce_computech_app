import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getProductCategoryId } from "@/lib/actions/getCategory";
import React, { Suspense } from "react";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}
export const revalidate = 0;

const CategoryPage = async ({ params: { categoryId } }: CategoryPageProps) => {
  const products = await getProductCategoryId(categoryId);

  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
