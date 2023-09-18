import { prisma } from "@/lib/db";

import { notFound } from "next/navigation";
import { BrandForm } from "./components/brand-form";

interface SliderProps {
  params: {
    brandId: string;
  };
}
const BrandPage: React.FC<SliderProps> = async ({ params }) => {

  
  if (params.brandId === "create") {
    return <BrandForm initialData={null} />;
  }
  
  const brand = await prisma.brand.findFirst({
    where: {
      id: params.brandId,
    },
  });

  if (!brand) {
    notFound();
  }
  
  
  return <BrandForm initialData={brand} />;
};

export default BrandPage;
