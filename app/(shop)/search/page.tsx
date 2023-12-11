
import { getSearchProducts } from "@/lib/actions/getSearch";
import { useSearchParams } from "next/navigation";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import NoResults from "../components/no-result";
import ProductCard from "@/components/ProductCard";
import { TProduct } from "@/types/type";

export const dynamic = 'force-dynamic'

const SearchPage = async ({searchParams} :{searchParams: { q: string | undefined }}) => {
  const searchQuery = searchParams.q
  
  // const search = useSearchParams();
  // const searchQuery = search ? search.get("q") : null;

  // const encodedSearchQuery = encodeURI(searchQuery || "");
  const searchedProducts: TProduct[] = await getSearchProducts(searchQuery);

  return (
    <Container classname="space-y-4">
      <Breadcrumb />
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
