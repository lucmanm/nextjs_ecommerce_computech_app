"use client";
import {
  ProductCategory,
  BrandSlider,
  ProductCategorySlider,
  CarouselSlider,
  Slider,
} from "@/components";
import { categories } from "@/constant";
import React from "react";

export default function Home() {
  // Destrcucturing Product categories & Brand List
  const [
    { title: productTitle, list: productList },
    { title: brandTitle, list: brandList },
  ] = categories;
  return (
    <main className="flex flex-col gap-y-4 overflow-hidden">
      <section className="mx-auto ml-4 w-full dt:container">
        <CarouselSlider />

        {/* all Product Type  Data  - import Slider Components  */}
        <Slider
          subtitle={true} //Enable and Disable below secription
          list={productList}
          sliderCustomerStyle="rounded-full" //Csutom style for slider
        />

        <ProductCategory />

        {/* Brand Data - import Slider Components */}
        <Slider
          subtitle={false} //Enable and Disable below secription
          sliderhead={brandTitle} //Title or description
          list={brandList} //Array output in descriptions
          sliderCustomerStyle="rounded-lg" //Csutom style for slider
          arrow={true}
        />
      </section>
    </main>
  );
}
