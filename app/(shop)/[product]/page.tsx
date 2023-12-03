import Info from "../components/info";
import Gallery from "@/components/gallery";
import { Product } from "@/types/table-types";
import { notFound } from "next/navigation";

// Actions
import { getProduct } from "@/lib/actions/getProduct";


// export async function generateMetadata({params: { product}}: ProductPageProps) {
//   const product: Promise<Product> = await  getProductById(productId, categoryId);
//   const productData = await product

//   return {
//     title: productData.model,
//     description: productData.description
//   }
// }

const ProductPage = async ({ params }: { params: { product: string } }) => {
  const products: Promise<Product> = getProduct(params.product);
  const product = await products;
  if (!product) notFound();

  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-3">
          <Gallery images={product.images} />
          <div className="col-span-2 mt-10 sm:mt-16 md:mt-0 md:px-4">
            <Info data={product} />
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

// export async function generateStaticParams({params}: { params:{ productId: string; categoryId: string}}) {
//   const {categoryId, productId} =  params
//   const product: Promise<Product[]> = await  getProductById(productId, categoryId);
//   const productData = await product

//   if(!productData || productData === null) notFound()

//   return productData.map(product => ({
//     productId: product.id,
//     categoryId: product.categoryId
//   }));
// }
