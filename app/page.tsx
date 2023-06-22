"use client";
import { Product } from "@/components";
import ProductCategory from "@/components/ProductCategory";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Slider />
      <ProductCategory/>
      <Product/>
    </main>
  );
}
