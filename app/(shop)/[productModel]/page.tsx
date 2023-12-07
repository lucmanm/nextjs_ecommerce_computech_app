import { notFound } from "next/navigation";

import Info from "../components/info";
import Gallery from "@/components/gallery";
// Actions
import { getProduct, getProductType } from "@/lib/actions/getProduct";
import { TProduct } from "@/types/type";
// Types

// FIXME no not found page
const ProductPage = async ({params,}: {params: { productModel: string }}) => {

  const productData: TProduct = await getProduct(params.productModel);

  if (productData?.model === params.productModel) {
    return (
      <div>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col md:grid md:grid-cols-3">
            <Gallery images={productData.images} />
            <div className="col-span-2 mt-10 sm:mt-16 md:mt-0 md:px-4">
              <Info prodoctData={productData} />
            </div>
          </div>
          <hr className="my-10" />
          {productData.description}
          {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
        </div>
      </div>
    );
  }else{
    undefined
  }

  // const productByBrand: Product[] = await getProductType(params.productModel);

  // if (productByBrand && !productData.model) {
  //   return (
  //     <Container classname="space-y-4">
  //       <Breadcrumb />
  //       {productByBrand.length === 0 ? (
  //         <NoResults />
  //       ) : (
  //         <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
  //           {productByBrand.map((productData) => (
  //             <ProductCard key={productData.id} productData={productData} />
  //           ))}
  //         </div>
  //       )}
  //     </Container>
  //   );
  // }

};

export default ProductPage;
