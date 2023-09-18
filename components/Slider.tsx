"use client";
import { SliderProps } from "@/types";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";

const Slider = ({
  sliderhead,
  list,
  subtitle,
  sliderCustomerStyle,
  arrow,
}: SliderProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      {sliderhead && (
        <span className="relative max-w-fit rounded-full bg-white px-5  font-bold text-blue-950 shadow-md  lg:py-2">
          {sliderhead}
        </span>
      )}

      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 7,
          gap: "2rem",
          arrows: arrow,
          pagination: false,
          breakpoints: {
            1024: { perPage: 5 },
            640: { perPage: 7, gap: "7rem" },
          },
        }}
        tag="section"
        aria-labelledby="product-brand-slider"
      >
        <SplideTrack className="py-4">
          {list.map(({ description, imgLink }) => (
            <SplideSlide
              key={imgLink}
              className="flex max-w-fit flex-col gap-y-2 "
            >
              <div
                className={`flex  flex-wrap items-center justify-center overflow-hidden bg-white p-4 hover:cursor-pointer hover:shadow-md active:shadow-inner ${sliderCustomerStyle}`}
              >
                <Image
                  src={imgLink}
                  width={100}
                  height={100}
                  alt={description}
                />
              </div>
              {subtitle && (
                <span className="dt:text-sm whitespace-pre text-center text-xs font-medium capitalize">
                  {description}
                </span>
              )}
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default Slider;
