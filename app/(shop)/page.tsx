// import Slider from "@/components/Slider";
import CarouselSlider from "@/components/CarouselSlider";
import { getSliders } from "@/lib/actions/getSliders";
import { SliderProps } from "@/types/table-types";
import BrandSlider from "./components/brand-slider";
import { getBrands } from "@/lib/actions/getBrands";
import HorizontalProductList from "@/components/horizontal-products-list";
import {  getProducts } from "@/lib/actions/getProduct";
import ProductListSlider from "./components/product-list-slider";

export const revalidate = 0;

export default async function ShopPage() {
  const slider: SliderProps[] = await getSliders();

  const brands = await getBrands();

  const products = await getProducts();

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
        <ProductListSlider title="Printers" productData={products} />
        {/* Brand Slider */}
      </div>
    </div>
  );
}
