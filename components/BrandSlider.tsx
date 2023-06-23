"use client";
import { categories } from "@/constant";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";

const BrandSlider = () => {
  return (
    <div className="flex flex-col py-2">
      <div className="">
        <span className="relative rounded-full bg-white px-4 py-1 text-sm font-semibold text-blue-950 shadow-md tb:text-base">
          Brands
        </span>
      </div>

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
            640: { perPage: 4, gap: "1rem" },
          },
        }}
        tag="section"
        aria-labelledby="brand-slider">
        <SplideTrack className="py-4">
          {categories[1].list.map(({ description, imgLink }) => (
            <SplideSlide
              key={description}
              className="flex items-center justify-center rounded bg-white p-3 shadow-md">
              <Image src={imgLink} width={100} height={100} alt={description} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default BrandSlider;
