import Container from "../../components/Container";
import PorductsFilters from "./components/fitlers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container classname="flex gap-x-4">
      {/* CONTINUE Filtrt not complete */}
      <PorductsFilters className="basis-1/6 hidden"/>
      <div className="lg:basis-5/6 basis-full">

      {children}
      </div>
    </Container>
  );
}
