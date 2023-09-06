import Container from "@/app/(admin)/components/Container";
import FlowBiteDataTable from "@/components/block/FlowBiteDataTable";
import { prisma } from "@/lib/db";
import React from "react";

async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  return data.products;
}

const ProductList = async () => {
  // const products = await fetchProducts();
  const products = await prisma.product.findMany();

  return (
    <Container title="Products" description="You can Mage add product here" btntype="create">
      <FlowBiteDataTable products={products} />
    </Container>
  );
};

export default ProductList;
