import { prisma } from "@/lib/db";

import ClientBrand from "./components/client";
import { z } from "zod";
import { BrandColumnProps } from "@/types";

const BrandsPage = async () => {

  const brands = await prisma.brand.findMany();

  const sliderSchema = z.object({
    id: z.string(),
    brand: z.string(),
    imageUrl: z.string(),
    createdAt: z.date().transform((date) => date.toLocaleDateString()),
  });

  const formattedbrands: BrandColumnProps[] = brands.map((item) =>
    sliderSchema.parse(item)
  );

  return (
    <div>
      <ClientBrand data={formattedbrands} />
    </div>
  );
};

export default BrandsPage;
