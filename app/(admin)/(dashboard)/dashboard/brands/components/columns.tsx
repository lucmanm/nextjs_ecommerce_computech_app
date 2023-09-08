"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

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
