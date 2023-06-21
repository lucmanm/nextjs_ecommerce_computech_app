import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import { sliderImages } from '@/constant';

const ProductCategory = () => {
  return (
      <Splide
       hasTrack={ false }
        options={{
        perPage: 5,
        rewind: true,
        gap: "1rem",
        perMove: 1,
        autoWidth: false,
        arrows: false,
        breakpoints: {
          1280: { perPage: 5},
          1024: { perPage: 4},
          640 : { perPage: 2},
        },
      }}
      tag='section'
      className="dt:container mt-8 overflow-hidden flex-1"
      aria-label="slider ">
          <SplideTrack className=''>
                {sliderImages.map(({ title, url }) => (
              <SplideSlide key={url} className='border border-black rounded-lg over'>

                <Image
                  src={url}
                  width={200}
                  height={200}
                  alt={title}
                  className="rounded-xl w-64"
                  />
              </SplideSlide>
          ))}
          </SplideTrack>
    </Splide>
  )
}

export default ProductCategory