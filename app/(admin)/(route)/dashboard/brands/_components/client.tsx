"use client";

import Container from "@/app/(admin)/(route)/dashboard/_components/Container";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { TBrand } from "@/types/type";

type BrandProps = {
  data: TBrand[];
}

const ClientBrand: React.FC<BrandProps> = ({ data }) => {
  return (
    <Container
      title={`Brands (${data.length})`}
      description="Manage your brands"
      btntype="create"
    >
      <DataTable columns={columns} data={data} searchKey="brandName" />
    </Container>
  );
};

export default ClientBrand;
