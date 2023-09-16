import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getProductByCategoryId } from "@/lib/actions/getCategory";
import Container from "../components/Container";
import NoResults from "../components/no-result";
import { Product } from "@/types/table-types";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}
export const revalidate = 0;

const CategoryPage = async ({ params: { categoryId } }: CategoryPageProps) => {
  const products: Product[] = await getProductByCategoryId(categoryId);

  return (
    <Container>
      <Breadcrumb />
      <div className=" grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {products.length === 0 && <NoResults />}
        {products.map((productData) => (
          <ProductCard key={productData.id} productData={productData} />
        ))}
      </div>
    </Container>
  );
};

export default CategoryPage;
