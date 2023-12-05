"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Product } from "@/types/table-types";
import ProductCard from "./ProductCard";
import Title from "./ui/Title";
import { cn } from "@/lib/utils";

interface HorizontalProductListProps {
  title: string;
  productData: Product[];
  className?: string | undefined;
}

// FIXME  Cards output showing extra CARD not looping properly
const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  title,
  productData,
  className,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Title>{title}</Title>
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          rewind: true,
          gap: "2rem",
          arrows: false,
          pagination: false,
          perPage:0,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 2},
          },
        }}
      >
        <SplideTrack className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5">
          {productData?.map((data, index) => (
            <SplideSlide
              key={index}
              className="flex max-w-fit flex-col gap-y-2 "
            >
              <ProductCard productData={data} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default HorizontalProductList;
