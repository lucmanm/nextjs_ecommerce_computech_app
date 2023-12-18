import { prisma } from "@/lib/db";

import { notFound } from "next/navigation";
import { BrandForm } from "./_components/brand-form";

const BrandPage = async ({ params }: { params: { brandId: string } }) => {
  
  if (params.brandId === "create") {
    return <BrandForm initialData={null} />;
  }
  
  const brand = await prisma.brand.findFirst({
    where: {
      brandId: params.brandId,
    },
  });

  if (!brand) {
    notFound();
  }
  return <BrandForm initialData={brand} />;
};

export default BrandPage;
