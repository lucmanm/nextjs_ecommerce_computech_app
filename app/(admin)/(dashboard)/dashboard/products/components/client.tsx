"use client";

import Container from "@/app/(admin)/components/Container";
import { DataTable } from "@/components/ui/data-table";
import {  columns } from "./columns";
import { ProductColumnProps } from "@/types";

interface SliderPageProps {
  data: ProductColumnProps[];
}

const ClientBrand: React.FC<SliderPageProps> = ({ data }) => {
  
  return (
    <Container
      title={`Product Listed (${data.length})`}
      description="Manage your Products Here"
      btntype="create"
    >
      <DataTable columns={columns} data={data} searchKey="description" />
    </Container>
  );
};

export default ClientBrand;
