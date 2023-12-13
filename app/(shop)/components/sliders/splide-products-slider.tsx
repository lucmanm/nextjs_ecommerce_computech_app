"use client";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import ProductCard from "@/app/(shop)/components/ProductCard";
import { TProduct } from "@/types/type";
import Title from "@/components/ui/Title";
import { Suspense } from "react";
import Loading from "../loading";

type SplideProductsSliderProps = {
  productsData: TProduct[];
  title: string;
};
export const SplideProductsSlider: React.FC<SplideProductsSliderProps> = ({
  productsData,
  title,
}) => {
  return (
    <>
      <Splide
        hasTrack={false}
        aria-label={title}
        options={{
          arrows: false,
          type: "loop",
          perPage: 5,
          gap: "2rem",
          perMove: 1,
          lazyLoad: true,
          pagination: false,
          breakpoints: {
            1024: { perPage: 4, gap: "2rem", perMove: 4 },
            640: { perPage: 2, gap: "1rem", perMove: 2 },
          },
        }}
        >
        <Title>{title}</Title>
        <SplideTrack className="py-4 ">
          {productsData?.map((data, index) => (
            <SplideSlide key={index}>
              <ProductCard productData={data} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
};



