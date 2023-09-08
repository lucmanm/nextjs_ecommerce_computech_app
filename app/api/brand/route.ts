import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const brands = await prisma.brand.findMany();
    return NextResponse.json({ message: "success", brands }, { status: 201 });
  } catch (error) {
    console.log("ERROR_BRAND", error);
    return NextResponse.json(
      { message: "ERROR_BRAND", error },
      { status: 500 }
    );
  }
};


export async function POST(req: Request) {

  try {
    const brandSchema = z.object({
      brand: z.string().toLowerCase(),
      imageUrl: z.string().toLowerCase()
    });
    
    const body = await req.json();
    const { brand, imageUrl } = brandSchema.parse(body);

    const checkbBrandName = await prisma.brand.findFirst({
      where: { brand },
    });

    if (checkbBrandName) {
      return new NextResponse("Brand name Exist", { status:500 });
    }

    const brandData = await prisma.brand.create({
      data: {
        brand,
        imageUrl,
      },
    });

    return NextResponse.json(
      {
        brand: brandData,
        messsage: "Brand Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("ERROR_BRAND", error);
    return NextResponse.json(
      { message: "ERROR_BRAND" },
      { status: 500 }
    );
  }
}
