"use client";

import Container from "@/app/(admin)/(route)/dashboard/_components/Container";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { TSlider } from "@/types/type";

interface SliderPageProps {
  data: TSlider[];
}

const ClientSliderTable: React.FC<SliderPageProps> = ({ data }) => {
  return (
    <Container
      title={`Sliders (${data.length})`}
      description="Manage your sliders"
      btntype="create"
    >
      <DataTable columns={columns} data={data} searchKey="label" />
    </Container>
  );
};

export default ClientSliderTable;
