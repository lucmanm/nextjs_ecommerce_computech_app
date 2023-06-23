"use client";
import { ProductCategory } from "@/components";
import BrandSlider from "@/components/BrandSlider";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 overflow-hidden">
      <Slider />
      <section className="ml-4 tb:ml-0">
        <ProductCategory />
      </section>
      {/* Brand Slider Components */}
      <section className="mx-auto ml-4 w-full dt:container">
        <BrandSlider />
      </section>
    </main>
  );
}
