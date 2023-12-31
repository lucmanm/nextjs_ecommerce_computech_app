"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import Image from "next/image";

export type BrandColumnProps = {
  id: string;
  brand: string;
  imageUrl: string;
  createdAt: string;
};

export const columns: ColumnDef<BrandColumnProps>[] = [
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <div className="">
        <Image
          alt={row.original.brand}
          src={row.original.imageUrl}
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
  },
  {
    accessorKey: "Action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
