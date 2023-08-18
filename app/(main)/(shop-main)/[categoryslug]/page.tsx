import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { getProductCategoryslug } from "@/lib/get/getCategory";
import React from "react";

interface CategoryPageProps {
    params: {
        categoryslug: string;
    };
}

const CategoryPage = async ({
    params: { categoryslug },
}: CategoryPageProps) => {
    const productByCategory = await getProductCategoryslug(categoryslug);
    return (
        <Container>
            <Breadcrumb />
            <ProductCard products={productByCategory} />
        </Container>
    );
};

export default CategoryPage;
