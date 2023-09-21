import { getProductById } from "@/lib/actions/getProduct";
import Info from "../../components/info";
import Gallery from "@/components/gallery";
import { Product } from "@/types/table-types";

interface ProductPageProps {
  params: {
    productId: string;
    categoryId: string;
  };
}

// export async function generateStaticParams({
//   params: { productId },
// }: ProductPageProps) {
//   const product: Product[] = await getProductById(productId);

//   return product.map((prod) => ({
//     productId: prod.id,
//   }));
// }

const ProductPage: React.FC<ProductPageProps> = async ({
  params: { productId, categoryId },
}) => {
  const product = await getProductById(productId, categoryId);

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
