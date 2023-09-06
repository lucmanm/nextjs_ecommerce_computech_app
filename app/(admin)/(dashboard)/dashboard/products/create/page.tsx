import Container from "@/components/Container";
import { prisma } from "@/lib/db";
import ProductForm from "./components/ProductForm";

const CreateProduct = async () => {
  const categories = await prisma.category.findMany();
  const brands = await prisma.brand.findMany();

  return (
    <Container title="Add Product">
      <ProductForm categories={categories} brands={brands} />
    </Container>
  );
};

export default CreateProduct;
