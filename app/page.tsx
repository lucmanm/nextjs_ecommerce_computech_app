"use client";
import {
  ProductCategory,
  BrandSlider,
  ProductCategorySlider,
} from "@/components";
import Slider from "@/components/Slider";
import { categories } from "@/constant";

export default function Home() {
  const [,] = categories;
  return (
    <main className="flex flex-col gap-y-4 overflow-hidden">
      <section className="mx-auto ml-4 w-full dt:container">
        <Slider />
        <ProductCategorySlider />
        <ProductCategory />
        {/* Brand Slider Components */}
        <BrandSlider />
      </section>
    </main>
  );
}
