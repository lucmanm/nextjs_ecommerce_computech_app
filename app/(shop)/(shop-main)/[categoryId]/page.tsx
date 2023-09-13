import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/app/(admin)/components/Container";
import ProductCard from "@/components/ProductCard";
import { getProductCategoryId } from "@/lib/actions/getCategory";
import React, { Suspense } from "react";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage = async ({ params: { categoryId } }: CategoryPageProps) => {
  const productByCategory = await getProductCategoryId(categoryId);
  return (
    <Container>
      <Breadcrumb />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductCard products={productByCategory} />
      </Suspense>
    </Container>
  );
};

export default CategoryPage;
