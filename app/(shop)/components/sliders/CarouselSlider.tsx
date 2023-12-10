"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { SliderProps } from "@/types/table-types";

interface CarouselSliderProps {
  sliderData: SliderProps[];
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ sliderData }) => {
  return (
    <Splide
      hasTrack={false}
      options={{
        type: "loop",
        pagination: false,
        arrows: false,
        autoplay: true,
        interval: 5000,
        gap: "2rem"
      }}
      aria-label="slider"
      className="z-0"
    >
      <SplideTrack className="gap-x-2">
        {sliderData.map(({ label, imageUrl }) => (
          <SplideSlide key={imageUrl} className="">
            <Image
              src={imageUrl}
              width={1280}
              height={100}
              alt={label}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="rounded-md"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default CarouselSlider;
