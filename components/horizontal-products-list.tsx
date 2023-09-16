"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { sliderImages } from "@/lib/constant";
import Product from "./Product";

interface HorizontalProductListProps {
  title: string;
}
const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  title,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="relative max-w-fit rounded-full bg-white px-5 py-2 text-sm font-bold text-blue-950 shadow-md md:text-sm">
        {title}
      </span>
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
            1024: { perPage: 3 },
            640: { perPage: 2 },
          },
        }}
        tag="section"
        aria-label="slider"
      >
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

export default HorizontalProductList;
