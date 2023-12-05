"use client";

import Container from "@/app/(admin)/components/Container";
import { DataTable } from "@/components/ui/data-table";
import {  columns } from "./columns";
import { TCategory } from "@/types/type";

interface SliderPageProps {
  data: TCategory[];
}

const ClientBrand: React.FC<SliderPageProps> = ({ data }) => {
  return (
    <Container
      title={`Categries (${data.length})`}
      description="Manage your Category"
      btntype="create"
    >
      <DataTable columns={columns} data={data} searchKey="category" />
    </Container>
  );
};

export default ClientBrand;
