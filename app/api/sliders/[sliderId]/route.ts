import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function PATCH(
  req: Request,
  { params }: { params: { sliderId: string } }
) {
  try {
    const sliderFormSchema = z.object({
      label: z.string().min(1),
      imageUrl: z.string().min(1),
    });

    const body = await req.json();
    const { label, imageUrl } = sliderFormSchema.parse(body);

    const slider = await prisma.slider.update({
      where: {
        id: params.sliderId,
      },
      data: {
        label,
        imageUrl,
      },
    });
    return NextResponse.json(
      { message: "Data Accepted", slider },
      { status: 202 }
    );
  } catch (error) {
    console.log("ERROR_PATCH_SLIDER", error);
    return NextResponse.json(
      { message: "Failed to update data." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { sliderId: string } }
) {
  try {
    const slider = await prisma.slider.delete({
      where: {
        id: params.sliderId,
      },
    });
    return NextResponse.json(
      { message: "Data Accepted", slider },
      { status: 202 }
    );
  } catch (error) {
    console.log("ERROR_DELETE_SLIDER", error);
    return NextResponse.json(
      { message: "Failed to delete data." },
      { status: 500 }
    );
  }
}
