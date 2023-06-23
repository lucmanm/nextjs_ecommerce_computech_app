"use client";
import { categories } from "@/constant";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";

const ProductCategorySlider = () => {
  return (
    <div className="flex flex-col py-2">
      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 7,
          gap: "1.5rem",
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: { perPage: 5 },
            640: { perPage: 4, snap: false },
          },
        }}
        tag="section"
        aria-labelledby="product-category-slider">
        <SplideTrack className="py-4">
          {categories[1].list.map(({ description, imgLink }) => (
            <SplideSlide
              key={description}
              className="flex flex-col items-center justify-center gap-2 p-3">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white dt:h-36 dt:w-36">
                <Image
                  src={imgLink}
                  width={100}
                  height={100}
                  alt={description}
                />
              </div>
              <span className="text-center text-xs font-semibold dt:whitespace-nowrap dt:text-sm">
                Ink & Toners Catridges
              </span>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default ProductCategorySlider;
