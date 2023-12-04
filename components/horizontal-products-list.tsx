"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Product } from "@/types/table-types";
import ProductCard from "./ProductCard";
import Title from "./ui/Title";

interface HorizontalProductListProps {
  title: string;
  productData: Product[];
}

// FIXME  Cards output showing extra CARD
const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  title,
  productData,
}) => {
  return (
    <div className="flex flex-col my-4">
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
        <SplideTrack className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5  lg:py-4">
          {productData?.map((data, index) => (
            <SplideSlide key={index}>
              <ProductCard productData={data} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default HorizontalProductList;
