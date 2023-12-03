// import Slider from "@/components/Slider";
import CarouselSlider from "@/components/CarouselSlider";
import { getSliders } from "@/lib/actions/getSliders";
import BrandSlider from "./components/brand-slider";
import { getBrands } from "@/lib/actions/getBrands";
import HorizontalProductList from "@/components/horizontal-products-list";
import { getProductListH, getProducts } from "@/lib/actions/getProduct";
import { Product } from "@/types/table-types";

export const revalidate = 0;

export default async function ShopPage() {
  const slider = await getSliders();

  const brands = await getBrands();

  const products: Product[] = await getProducts();
  const printersData: Product[] = await getProductListH("printer");
  const computersData: Product[] = await getProductListH("desktop");
  const MonitorsData: Product[] = await getProductListH("monitor");
    
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

      {/* Slider for front page */}
        <HorizontalProductList title="Featured" productData={products} />
        <HorizontalProductList title="Computers" productData={computersData} />
        <HorizontalProductList title="Monitors" productData={MonitorsData} />
        <HorizontalProductList title="Printers" productData={printersData} />
      </div>
    </div>
  );
}
