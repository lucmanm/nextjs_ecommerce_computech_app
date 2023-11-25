"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { CategoryColumnProps } from "@/types";



export const columns: ColumnDef<CategoryColumnProps>[] = [
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
