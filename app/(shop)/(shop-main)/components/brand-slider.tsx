"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";

interface ListProps {
  brand: string;
  imageUrl: string;
}

interface SliderProps {
  sliderhead?: string;
  data: ListProps[];
  subtitle?: boolean;
  sliderSlide?: string;
  sliderCustomerStyle?: string;
  arrow?: boolean;
}

const BrandSlider = ({
  sliderhead,
  data,
  subtitle,
  sliderCustomerStyle,
  arrow,
}: SliderProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      {sliderhead && (
        <span className="relative max-w-fit rounded-full bg-white px-5 py-2 text-xs font-bold text-blue-950 shadow-md md:text-sm">
          {sliderhead}
        </span>
      )}

      <Splide
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 7,
          gap: "2rem",
          arrows: false,
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
          {data.map(({ brand, imageUrl }) => (
            <SplideSlide
              key={imageUrl}
              className="flex max-w-fit flex-col gap-y-2 "
            >
              <div
                className={`flex  flex-wrap items-center justify-center overflow-hidden bg-white p-4 hover:cursor-pointer hover:shadow-md active:shadow-inner ${sliderCustomerStyle}`}
              >
                <Image src={imageUrl} width={100} height={100} alt={brand} />
              </div>
              {subtitle && (
                <span className="dt:text-sm whitespace-pre text-center text-xs font-medium capitalize">
                  {brand}
                </span>
              )}
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default BrandSlider;
