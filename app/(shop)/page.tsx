// import Slider from "@/components/Slider";
import { getSliders } from "@/lib/actions/getSliders";
import { getBrands } from "@/lib/actions/getBrands";
import { getProductListH, getProducts } from "@/lib/actions/getProduct";
import { TBrand, TProduct } from "@/types/type";
import CarouselSlider from "./_components/sliders/CarouselSlider";
import BrandSlider from "./_components/sliders/brand-slider";
import { SplideProductsSlider } from "./_components/sliders/splide-products-slider";
import Banners from "./_components/banners";

export const revalidate = 0;

export default async function ShopPage() {
  const slider = await getSliders();

  const brands: TBrand[] = await getBrands();

  const products: TProduct[] = await getProducts();
  const printersData: TProduct[] = await getProductListH("printers");
  const computersData: TProduct[] = await getProductListH("desktop");
  const MonitorsData: TProduct[] = await getProductListH("monitors");

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
        <Banners/>
        {/* Slider for front page */}
        <SplideProductsSlider productsData={products} title="Featured" />
        <SplideProductsSlider productsData={computersData} title="Computers" />
        <SplideProductsSlider productsData={MonitorsData} title="Monitors" />
        <SplideProductsSlider productsData={printersData} title="Printers" />
      </div>
    </div>
  );
}
