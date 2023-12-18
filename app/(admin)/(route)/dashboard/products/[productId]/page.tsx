import Container from "@/app/(admin)/(route)/dashboard/_components/Container";
import { prisma } from "@/lib/db";
import ProductForm from "./_components/product-form";
import { notFound } from "next/navigation";
import { TImage, TProduct } from "@/types/type";
import { imageSchema, productFormSchema } from "@/types/validation";

interface CreateProductProps {
  params: {
    productId: string;
  };
}


const CreateProduct: React.FC<CreateProductProps> = async ({ params }) => {
  const categories = await prisma.category.findMany();
  const brands = await prisma.brand.findMany();

  if (params.productId === "create") {
    return <ProductForm productData={null} categories={categories} brands={brands} />
  }

  const product =
    await prisma.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        images: true,
      },
    });

    const fiteredProduct = productFormSchema.parse(product)

  if (!product) {
    notFound();
  }

  return (
    <ProductForm
      productData={fiteredProduct}
      categories={categories}
      brands={brands}
    />
  );
};

export default CreateProduct;
