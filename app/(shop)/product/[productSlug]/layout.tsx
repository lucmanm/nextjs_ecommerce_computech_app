import { getBrands } from "@/lib/actions/getBrands";
import Container from "../../_components/Container";
import PorductsFilters from "./_components/fitlers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brandData = await getBrands()
  return (
    <Container classname="flex gap-x-4">
      {/* CONTINUE Filtrt not complete */}
      <PorductsFilters className="basis-1/6" data={brandData}/>
      <div className="lg:basis-5/6 basis-full">

      {children}
      </div>
    </Container>
  );
}
