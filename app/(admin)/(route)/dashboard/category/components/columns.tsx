"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { TCategory } from "@/types/type";



export const columns: ColumnDef<TCategory>[] = [
  {
    accessorKey: "categoryName",
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
