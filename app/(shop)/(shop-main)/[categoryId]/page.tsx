import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getProductByCategoryId } from "@/lib/actions/getCategory";
import Container from "../components/Container";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}
export const revalidate = 0;

const CategoryPage = async ({ params: { categoryId } }: CategoryPageProps) => {
  const products = await getProductByCategoryId(categoryId);

  return (
    <Container>
      <Breadcrumb />
      <div className=" flex flex-wrap gap-2">
        {products.map((productData) => (
          <ProductCard key={productData.id} productData={productData} />
        ))}
      </div>
    </Container>
  );
};

export default CategoryPage;
