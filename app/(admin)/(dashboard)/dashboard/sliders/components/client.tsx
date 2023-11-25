"use client";

import Container from "@/app/(admin)/components/Container";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { SliderColumnProps } from "@/types";

interface SliderPageProps {
  data: SliderColumnProps[];
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
