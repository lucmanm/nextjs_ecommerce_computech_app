"use client";
import { categories } from "@/constant";
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
    <div className="slider__container">
      {sliderhead && <span className="slider__header">{sliderhead}</span>}

      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 7,
          gap: "1.5rem",
          arrows: arrow,
          pagination: false,
          breakpoints: {
            1024: { perPage: 5 },
            640: { perPage: 7, gap: "1rem" },
          },
        }}
        tag="section"
        aria-labelledby="product-brand-slider">
        <SplideTrack className="py-4">
          {list.map(({ description, imgLink }) => (
            <SplideSlide
              key={imgLink}
              className="flex max-w-fit flex-col gap-y-2 ">
              <div className={`slider__slider ${sliderCustomerStyle}`}>
                <Image
                  src={imgLink}
                  width={100}
                  height={100}
                  alt={description}
                />
              </div>
              {subtitle && (
                <span className="slider__subtitle__style">{description}</span>
              )}
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default Slider;
