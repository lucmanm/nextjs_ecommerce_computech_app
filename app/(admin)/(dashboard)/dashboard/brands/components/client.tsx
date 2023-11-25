"use client";

import Container from "@/app/(admin)/components/Container";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { BrandColumnProps } from "@/types";

type SliderPageProps = {
  data: BrandColumnProps[];
}

const ClientBrand: React.FC<SliderPageProps> = ({ data }) => {
  return (
    <Container
      title={`Brands (${data.length})`}
      description="Manage your brands"
      btntype="create"
    >
      <DataTable columns={columns} data={data} searchKey="brand" />
    </Container>
  );
};

export default ClientBrand;
