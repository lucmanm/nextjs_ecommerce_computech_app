import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getProductCategoryId } from "@/lib/actions/getCategory";
import Container from "../components/Container";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}
export const revalidate = 0;

const CategoryPage = async ({ params: { categoryId } }: CategoryPageProps) => {
  const products = await getProductCategoryId(categoryId);

  return (
    <Container>
      <Breadcrumb />
      {/* Issue #3 */}
      <ProductCard products={products} />
    </Container>
  );
};

export default CategoryPage;
