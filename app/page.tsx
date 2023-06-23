"use client";
import { ProductCategory, BrandSlider } from "@/components";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4 overflow-hidden">
      <Slider />
      <section className="mx-auto ml-4 w-full dt:container">
        <ProductCategory />
      </section>
      {/* Brand Slider Components */}
      <section className="mx-auto ml-4 w-full dt:container">
        <BrandSlider />
      </section>
    </main>
  );
}
