import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function PATCH(
  req: Request,
  { params }: { params: { brandId: string } }
) {
  try {
    const brandSchema = z.object({
      brand: z.string().toLowerCase(),
      imageUrl: z.string().toLowerCase(),
    });

    const body = await req.json();
    const { brand, imageUrl } = brandSchema.parse(body);

    const brandData = await prisma.brand.update({
      where: {
        id: params.brandId,
      },
      data: {
        brand,
        imageUrl,
      },
    });

    return NextResponse.json(
      {
        brand: brandData,
        messsage: "Brand Updated Successfully",
      },
      { status: 202 }
    );
  } catch (error) {
    console.log("ERROR_BRAND_PATCH", error);
    return NextResponse.json({ message: "ERROR_BRAND_PATCH" }, { status: 500 });
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { brandId: string } }
) {
  try {
    const brandData = await prisma.brand.delete({
      where: {
        id: params.brandId,
      }
    });

    return NextResponse.json(
      {
        brand: brandData,
        messsage: "Brand Deleted Successfully",
      },
      { status: 202 }
    );
  } catch (error) {
    console.log("ERROR_BRAND_DELETE", error);
    return NextResponse.json({ message: "ERROR_BRAND_DELETE" }, { status: 500 });
  }
}
