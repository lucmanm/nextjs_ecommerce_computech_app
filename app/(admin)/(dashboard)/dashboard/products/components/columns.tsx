"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { z } from "zod";

export const productColumnSchema = z.object({
  id: z.string(),
  description: z.string(),
  price: z.string(),
  model: z.string(),
  stock: z.number(),
  brand: z.string(),
  category: z.string(),
  createdAt: z.string(),
});
export type ProductColumnProps = z.infer<typeof productColumnSchema>;

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
