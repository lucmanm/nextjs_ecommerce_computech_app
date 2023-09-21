// import ProductCard from "@/components/ProductCard";
import { getProductByCategoryId } from "@/lib/actions/getCategory";
import NoResults from "../components/no-result";
import { Product } from "@/types/table-types";
import Container from "../components/Container";
import dynamic from "next/dynamic";
import Breadcrumb from "../components/Breadcrumb";

const ProductCard = dynamic(() => import("@/components/ProductCard"));

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}
// export async function generateStaticParams({
//   params: { categoryId },
// }: CategoryPageProps) {
//   const productByCategories: Product[] = await getProductByCategoryId(
//     categoryId
//   );

//   return productByCategories.map((products) => ({
//     categoryId: products.categoryId,
//   }));
// }

const CategoryPage = async ({ params: { categoryId } }: CategoryPageProps) => {
  const products: Product[] = await getProductByCategoryId(categoryId);

  return (
    <Container classname="space-y-4">
      <Breadcrumb />
      {products.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
          {products.map((productData) => (
            <ProductCard key={productData.id} productData={productData} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default CategoryPage;
