"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { ProductColumnProps } from "@/types";

export const columns: ColumnDef<ProductColumnProps>[] = [
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },

  {
    accessorKey: "description",
    header: "Product Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "salePrice",
    header: "Sale Price",
  },
  {
    accessorKey: "category",
    header: "Category",
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
