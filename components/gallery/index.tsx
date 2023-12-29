"use client";

import { Tab } from "@headlessui/react";

import GalleryTab from "./gallery-tab";

// import { Image as ImageProps } from "@/types/table-types";

import Image from "next/image";
import { productFormSchema } from "@/types/validation";
import { z } from "zod";

// interface GalleryProps {
//   images: ImageProps[];
// }
const ImagesSchema = productFormSchema.pick({
    images: true
})

type GalleryProps = z.infer<typeof ImagesSchema>

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((data, index) => (
            <GalleryTab key={index} images={data.imageUrl} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((data, index) => (
          <Tab.Panel key={index}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                fill
                src={data.imageUrl}
                alt="Product Images"
                className="object-contain object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
