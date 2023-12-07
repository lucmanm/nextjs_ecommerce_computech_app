"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Product } from "@/types/table-types";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import Title from "@/components/ui/Title";
import Loading from "./loading";
import ProductCard from "@/components/ProductCard";

interface HorizontalProductListProps {
  title: string;
  productData: Product[];
  className?: string | undefined;
}

// FIXME  Cards output showing extra CARD not looping properly and not mobile friendly
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
          perPage: 0,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 2 },
          },
        }}
      >
        <SplideTrack className="grid grid-cols-2 py-4 md:grid-cols-4 lg:grid-cols-5">
          {productData?.map((data, index) => (
            <Suspense key={index} fallback={<Loading />}>
              <SplideSlide className="flex max-w-fit flex-col gap-y-2 ">
                <ProductCard productData={data} />
              </SplideSlide>
            </Suspense>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default HorizontalProductList;
