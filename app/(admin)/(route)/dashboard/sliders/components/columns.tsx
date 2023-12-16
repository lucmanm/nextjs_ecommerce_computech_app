"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { TSlider } from "@/types/type";

export const columns: ColumnDef<TSlider>[] = [
  {
    accessorKey: "label",
    header: "Label",
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
