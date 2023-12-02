import { getProductType } from "@/lib/actions/getProductType";
import { Product } from "@/types/table-types";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import NoResults from "../components/no-result";
import ProductCard from "@/components/ProductCard";

export const revalidate = 0;

const ProductTypePage = async ({
  params,
}: {
  params: { productType: string };
}) => {
  const productByBrand: Product[] = await getProductType(params.productType);

  return (
    <Container classname="space-y-4">
      <Breadcrumb />
      {productByBrand.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
          {productByBrand.map((productData) => (
            <ProductCard key={productData.id} productData={productData} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default ProductTypePage;