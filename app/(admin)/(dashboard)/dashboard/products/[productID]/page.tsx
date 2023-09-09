import Container from "@/app/(admin)/components/Container";
import { prisma } from "@/lib/db";
import ProductForm from "./components/product-form";
import { notFound } from "next/navigation";
interface CreateProductProps {
  params: {
    productID: string;
  };
}
const CreateProduct: React.FC<CreateProductProps> = async ({ params }) => {
  const categories = await prisma.category.findMany();
  const brands = await prisma.brand.findMany();

  if (params.productID === "create") {
    return (
      <ProductForm productData={null} categories={categories} brands={brands} />
    );
  }

  const product = await prisma.product.findUnique({
    where: {
      id: params.productID,
    },
    include: {
      images: true,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <ProductForm
      productData={product}
      categories={categories}
      brands={brands}
    />
  );
};

export default CreateProduct;
