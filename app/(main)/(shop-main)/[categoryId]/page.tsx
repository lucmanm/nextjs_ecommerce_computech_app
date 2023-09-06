import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/app/(admin)/components/Container";
import ProductCard from "@/components/ProductCard";
import { getProductCategoryslug } from "@/lib/actions/getCategory";
import React from "react";

interface CategoryPageProps {
    params: {
        categoryId: string;
    };
}

const CategoryPage = async ({
    params: { categoryId },
}: CategoryPageProps) => {
    const productByCategory = await getProductCategoryslug(categoryId);
    return (
        <Container>
            <Breadcrumb />
            <ProductCard products={productByCategory} />
        </Container>
    );
};

export default CategoryPage;
