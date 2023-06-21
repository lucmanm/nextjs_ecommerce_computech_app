import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { sliderImages } from "@/constant";

const Slider = () => {
  return (
    <Splide
      className="dt:container mt-8 rounded-xl overflow-hidden"
      aria-label="slider ">
      {sliderImages.map(({ title, url }) => (
        <SplideSlide key={url}>
          <Image
            src={url}
            width={1280}
            height={100}
            alt={title}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
