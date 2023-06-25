"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { sliderImages } from "@/constant";
import Product from "./Product";

const ProductCategory = () => {
  return (
    <div className="slider__container">
      <span className="slider__header">New Arrival</span>
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 1,
          rewind: true,
          gap: "1.5rem",
          perMove: 1,
          arrows: false,
          pagination: false,
          breakpoints: {
            1280: { perPage: 4 },
            1024: { perPage: 4 },
            640: { perPage: 2 },
          },
        }}
        tag="section"
        aria-label="slider">
        <SplideTrack className="">
          {sliderImages.map(({ url }) => (
            <SplideSlide key={url} className="flex max-w-fit flex-col gap-y-2">
              <Product />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default ProductCategory;
