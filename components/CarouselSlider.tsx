"use client"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import '@splidejs/react-splide/css';
import { sliderImages } from "@/constant";

const CarouselSlider = () => {
  return (
    <Splide
    hasTrack={false}
    options={{
        type: "loop",
      gap: "1rem;",
      width: 1280,
      pagination: false,
      arrows: false,
      resetProgress: false,
      autoplay: true,
      interval: 5000,
    }}
    className="mt-8 overflow-hidden rounded-md dt:container tb:rounded-xl bg-white"
    aria-label="slider ">
      <SplideTrack>
        {sliderImages.map(({ title, url }) => (
          <SplideSlide key={url}>
            <Image src={url} width={1280} height={100} alt={title} />
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};

export default CarouselSlider;