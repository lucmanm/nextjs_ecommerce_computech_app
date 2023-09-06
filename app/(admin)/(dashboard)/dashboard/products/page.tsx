import Container from "@/components/Container";
import Title from "@/components/Title";
import FlowBiteDataTable from "@/components/block/FlowBiteDataTable";
import React from "react";

async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  return data.products;
}

const ProductList = async () => {
  const products = await fetchProducts();

  return (
    <Container title="Products">
      <FlowBiteDataTable products={products} />
    </Container>
  );
};

export default ProductList;
