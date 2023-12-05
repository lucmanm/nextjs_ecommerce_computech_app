import { prisma } from "@/lib/db";
import { brandSchema } from "@/types/validation";
import { NextResponse } from "next/server";

// Update Function
export async function PATCH(req: Request, { params }: { params: { brandId: string } }
) {
  try {

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

// Delete function
export async function DELETE(req: Request, { params }: { params: { brandId: string } }) {
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
