import { getProductType } from "@/lib/actions/getProduct";
import { Product } from "@/types/table-types";
import Container from "../../components/Container";
import Breadcrumb from "../../components/Breadcrumb";
import NoResults from "../../components/no-result";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";
import Loading from "./components/loading";

export const revalidate = 0;

const ProductTypePage = async ({
  params,
}: {
  params: { productSlug: string };
}) => {
  const productByBrand: Product[] = await getProductType(params.productSlug);

  return (
    <Container classname="space-y-4">
      <Breadcrumb />
      {productByBrand.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {productByBrand.map((data, index) => (
            <Suspense key={index} fallback={<Loading />}>
              <ProductCard productData={data} />
            </Suspense>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ProductTypePage;
