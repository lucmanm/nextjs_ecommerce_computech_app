import Slider from "@/components/Slider";
import CarouselSlider from "@/components/CarouselSlider";
import { categories } from "@/lib/constant";
import { getSliders } from "@/lib/actions/getSliders";
import BrandSlider from "./components/brand-slider";
import { getBrands } from "@/lib/actions/getBrands";
import HorizontalProductList from "@/components/horizontal-products-list";
import { getProducts } from "@/lib/actions/getProduct";

export const revalidate = 0;

export default async function ShopPage() {
  const slider = await getSliders();
  const brands = await getBrands();
  const products = await getProducts();
  // Destrcucturing Product categories & Brand List

  const [{ title: productTitle, list: productList }] = categories;

  return (
    <div className="my-4 flex flex-col space-y-4 overflow-hidden md:my-8 md:space-y-8">
      {/* Main brands of homepage */}
      <CarouselSlider sliderData={slider} />

      {/* all Product Type  Data  - import Slider Components  */}
      {/* Disabled / Hidden */}
      {/* <Slider
          subtitle={true} //Enable and Disable below secription
          list={productList}
          sliderCustomerStyle="rounded-full w-20 h-20 dt:w-28 dt:h-28" //Csutom style for slider
        /> */}

      {/* Category of products display */}
      <div className="px-3 lg:px-0">
        <HorizontalProductList title="Featured" productData={products} />

        <BrandSlider
          subtitle={false}
          sliderhead="Brand"
          data={brands}
          sliderCustomerStyle="rounded-lg w-24 h-24 dt:w-28 dt:h-28"
          arrow={true}
        />
      </div>
    </div>
  );
}
