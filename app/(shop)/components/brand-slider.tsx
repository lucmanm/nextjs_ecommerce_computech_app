"use client";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import { Brand } from "@prisma/client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

interface ListProps {
  brand: string;
  imageUrl: string;
}

interface SliderProps {
  title?: string;
  data: Brand[];
  subtitle?: boolean;
  sliderSlide?: string;
  className?: string | undefined;
  arrow?: boolean;
}

const BrandSlider = ({
  title,
  data,
  subtitle,
  className,
  arrow,
}: SliderProps) => {
  return (
    <div className="flex flex-col gap-y-2">

      {
        title && <Title>{title}</Title>
      }
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
          {data.map(({ brand, imageUrl }) => (
            <SplideSlide
              key={imageUrl}
              className="flex max-w-fit flex-col gap-y-2 "
            >
              <Link href={`/product/${brand}`}>
                <div
                  className={cn(
                    "flex flex-wrap items-center justify-center overflow-hidden bg-white p-4 hover:cursor-pointer hover:shadow-md active:shadow-inner lg:w-28 lg:h-28 h-24 w-24 rounded-lg",
                    className
                  )}
                >
                  <Image src={imageUrl} width={100} height={100} alt={brand} />
                </div> 
                {subtitle && (
                  <span className="lg:text-sm whitespace-pre text-center text-sm font-medium capitalize">
                    {brand}
                  </span>
                )}
              </Link>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default BrandSlider;
