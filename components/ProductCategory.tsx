import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import { sliderImages } from '@/constant';

const ProductCategory = () => {
  return (
      <Splide
       hasTrack={ true }
        options={{
        perPage: 2,
        focus: 0,
        rewind: true,
        gap: 2,
        perMove: 1,
      }}
      tag='section'
      className="dt:container mt-8 rounded-x overflow-hidden flex-1"
      aria-label="slider ">
      <SplideTrack>
      {sliderImages.map(({ title, url }) => (
          <SplideSlide key={url}>
            <Image
              src={url}
              width={200}
              height={200}
              alt={title}
              className="rounded-xl"
              />
              </SplideSlide>
      ))}
      </SplideTrack>
    </Splide>
  )
}

export default ProductCategory