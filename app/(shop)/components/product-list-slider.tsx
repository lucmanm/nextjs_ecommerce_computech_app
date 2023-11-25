"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Product } from "@/types/table-types";
import Title from "@/components/ui/Title";
import ProductCard from "@/components/ProductCard";


interface HorizontalProductListProps {
  title: string;
  productData: Product[];
}
const ProductListSlider: React.FC<HorizontalProductListProps> = ({
  title,
  productData,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Title>{title}</Title>
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
        <SplideTrack className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5  lg:py-8">
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

export default ProductListSlider;
