import { getProductType } from "@/lib/actions/getProduct";
import { TProduct } from "@/types/type";
import ProductCard from "../../_components/ProductCard";
import NoResults from "../../_components/no-result";
import { getFilerProducts } from "@/lib/actions/get-filter-products";

export const revalidate = 0;

const ProductTypePage = async ({
  params,
  searchParams,
}: {
  params: { productSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const filterProduct = await getFilerProducts({
    brand: searchParams,
    productCategory: params.productSlug,
  });
  console.log(filterProduct);
  

  // decode params to return to originalstring
  const decodedUrl = decodeURIComponent(params.productSlug).replace(
    /\\s+/g,
    ""
  );
  const productBySlug: TProduct[] = await getProductType(decodedUrl);

  return (
    <>
      {productBySlug.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {productBySlug.map((data, index) => (
            <ProductCard key={index} productData={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductTypePage;
