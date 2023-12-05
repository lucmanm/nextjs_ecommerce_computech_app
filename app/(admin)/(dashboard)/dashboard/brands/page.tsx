import { prisma } from "@/lib/db";
// Components
import ClientBrand from "./components/client";

// Schema & Type
import { TBrand } from "@/types/type";
import { brandFormSchema } from "@/types/validation";

const BrandsPage = async () => {

  const brands = await prisma.brand.findMany();

   const formattedbrands: TBrand[] = brands.map((item) =>
    brandFormSchema.parse(item)
  );

  return (
    <div>
      <ClientBrand data={formattedbrands} />
    </div>
  );
};

export default BrandsPage;
