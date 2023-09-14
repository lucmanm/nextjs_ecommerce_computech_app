"use client";

import { Tab } from "@headlessui/react";

import GalleryTab from "./gallery-tab";

import { Image as ImageProps } from "@/types/table-types";

import Image from "next/image";

interface GalleryProps {
  images: ImageProps[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map(({ id, imageUrl }) => (
            <GalleryTab key={id} images={imageUrl} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map(({ id, imageUrl }) => (
          <Tab.Panel key={id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                fill
                src={imageUrl}
                alt="Product Images"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
