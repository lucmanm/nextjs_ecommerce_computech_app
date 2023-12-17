import { getProductType } from "@/lib/actions/getProduct";
import NoResults from "../../components/no-result";
import ProductCard from "@/app/(shop)/components/ProductCard";
import { Suspense } from "react";
import Loading from "./components/loading";
import { TProduct } from "@/types/type";

export const revalidate = 0;

const ProductTypePage = async ({params}: {params: { productSlug: string };
}) => {
  const decodedUrl = decodeURIComponent(params.productSlug).replace(/\\s+/g, '')
  const productBySlug: TProduct[] = await getProductType(decodedUrl);
  return (
    <>
      {productBySlug.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {productBySlug.map((data, index) => (
            <Suspense key={index} fallback={<Loading />}>
              <ProductCard productData={data} />
            </Suspense>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductTypePage;
