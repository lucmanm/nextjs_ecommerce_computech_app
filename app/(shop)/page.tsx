// import Slider from "@/components/Slider";
import CarouselSlider from "@/components/CarouselSlider";
import { getSliders } from "@/lib/actions/getSliders";
import { Product, SliderProps } from "@/types/table-types";
import BrandSlider from "./components/brand-slider";
import { getBrands } from "@/lib/actions/getBrands";
import HorizontalProductList from "@/components/horizontal-products-list";
import { getProductListH, getProducts } from "@/lib/actions/getProduct";

export const revalidate = 0;

export default async function ShopPage() {
  const slider = await getSliders();

  const brands = await getBrands();

  const products = await getProducts();
  const printersData = await getProductListH("printer");
  const computersData = await getProductListH("desktop");
    
  return (
    <div className="my-4 flex flex-col space-y-4 overflow-hidden md:my-8 md:space-y-8">
      {/* Main slider for homepage */}

      <CarouselSlider sliderData={slider} />

      <div className="px-3 lg:px-0">
        {/* Product Listing slider */}

        <BrandSlider
          subtitle={false}
          title="Shop By Brand"
          data={brands}
          arrow={false}
        />


        <HorizontalProductList title="Featured" productData={products} />
        <HorizontalProductList title="Computers" productData={computersData} />
        <HorizontalProductList title="Printers" productData={printersData} />

        {/* Brand Slider */}
      </div>
    </div>
  );
}
