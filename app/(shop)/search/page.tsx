
import { getSearchProducts } from "@/lib/actions/getSearch";
import { TProduct } from "@/types/type";
import Container from "../_components/Container";
import NoResults from "../_components/no-result";
import ProductCard from "../_components/ProductCard";

export const dynamic = 'force-dynamic'

const SearchPage = async ({searchParams} :{searchParams: { q: string | undefined }}) => {
  const searchQuery = searchParams.q
  
  
  const searchedProducts: TProduct[] = await getSearchProducts(searchQuery);

  return (
    <Container classname="space-y-4">
      {searchedProducts.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
          {searchedProducts.map((data, index) => (
            // Error: getting error from ProductCard components type
            <ProductCard key={index} productData={data} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default SearchPage;
