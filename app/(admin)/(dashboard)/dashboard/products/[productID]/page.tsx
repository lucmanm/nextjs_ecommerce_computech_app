import Container from "@/app/(admin)/components/Container";
import { prisma } from "@/lib/db";
import ProductForm from "./components/product-form";
interface CreateProductProps {
  params: {
    productID: string;
  };
}
const CreateProduct: React.FC<CreateProductProps> = async ({ params }) => {
  const product = await prisma.product.findFirst({
    where: {
      id: params.productID,
    },
  });

  const categories = await prisma.category.findMany();
  const brands = await prisma.brand.findMany();

  return (
    <ProductForm
      productData={product}
      categories={categories}
      brands={brands}
    />
  );
};

export default CreateProduct;
