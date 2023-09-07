"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export type SliderColumnProps = {
  id: string;
  label: string;
  imageUrl: string;
  createdAt: string;
};

export const columns: ColumnDef<SliderColumnProps>[] = [
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
];
