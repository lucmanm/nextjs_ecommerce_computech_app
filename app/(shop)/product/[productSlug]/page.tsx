import { getProductType } from "@/lib/actions/getProduct";
import Container from "../../components/Container";
import NoResults from "../../components/no-result";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";
import Loading from "./components/loading";
import { TProduct } from "@/types/type";

export const revalidate = 0;

const ProductTypePage = async ({
  params,
}: {
  params: { productSlug: string };
}) => {
  const productBySlug: TProduct[] = await getProductType(params.productSlug);

  return (
    <Container classname="space-y-4">
      {productBySlug.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {productBySlug.map((data, index) => (
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
