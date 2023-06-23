"use client";
import { categories } from "@/constant";
import { ProductCategoryProps } from "@/types";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";

const BrandSlider = () => {
  return (
    <>
      <div className="flex flex-col gap-4 border border-black">
        <span className="relative rounded-full bg-white px-4 py-0.5 font-semibold shadow">
          Brands
        </span>
      </div>
      <Splide
        options={{
          breakpoints: {
            1280: { perPage: 4 },
            1024: { perPage: 5 },
            640: { perPage: 4, snap: true, arrows: false },
          },
        }}
        tag="section"
        aria-label="slider">
        <SplideTrack className="">
          {categories[1].list.map(({ description, imgLink }) => (
            <SplideSlide key={description}>
              <div className="relative m-2 h-32 w-32 overflow-hidden rounded-md bg-white shadow">
                <Image
                  src={imgLink}
                  width={100}
                  height={100}
                  alt={description}
                  className=" self-center"
                />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
};

export default BrandSlider;
