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

        {/* Product Categeory Slider Image */}
        <Slider list={productList}/>

        <ProductCategory />
        {/* Brand Slider Components */}
        <BrandSlider />
      </section>
    </main>
  );
}
