"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Product } from "@/types/table-types";
import ProductCard from "./ProductCard";

interface HorizontalProductListProps {
  title: string;
  productData: Product[];
}
const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  title,
  productData,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="md:px- relative max-w-fit rounded-full bg-white px-5 py-2 text-sm font-bold text-blue-950 shadow-md md:py-1 md:text-lg">
        {title}
      </span>
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          rewind: true,
          gap: "1.5rem",
          perMove: 1,
          arrows: false,
          pagination: false,
        }}
      >
        <SplideTrack className="grid grid-cols-2 py-2 md:grid-cols-4 lg:grid-cols-5 ">
          {productData.map((productData) => (
            <SplideSlide key={productData.id}>
              <ProductCard productData={productData} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default HorizontalProductList;
