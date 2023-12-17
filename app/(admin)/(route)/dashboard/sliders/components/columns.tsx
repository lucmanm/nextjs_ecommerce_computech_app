"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";
import { TSlider } from "@/types/type";
import Image from "next/image";

export const columns: ColumnDef<TSlider>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <div className="">
        <Image
          alt={row.original.label}
          src={row.original.imageUrl}
          width={500}
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
