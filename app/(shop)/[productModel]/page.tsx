import { notFound } from "next/navigation";

import Info from "../components/info";
import Gallery from "@/components/gallery";
// Actions
import { getProduct } from "@/lib/actions/getProduct";
import { TProduct } from "@/types/type";
import { Product } from "@/types/table-types";
// Types


const ProductPage = async ({ params }: { params: { productModel: string }}) => {

  const productData: TProduct = await getProduct(params.productModel);
  
  if (!productData) notFound();
  
  console.log(productData.description);

  return (
    <div>
      {productData.description}
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-3">
          {/* <Gallery images={productData.images} /> */}
          <div className="col-span-2 mt-10 sm:mt-16 md:mt-0 md:px-4">
            {/* <Info data={productData} /> */}
          </div>
        </div>
        <hr className="my-10" />
        Product List Ralated Featuered
        {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
      </div>
    </div>
  );

};

export default ProductPage;
