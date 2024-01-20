import { prisma } from "@/lib/db";
import { brandSchema } from "@/types/validation";
import { NextResponse } from "next/server";


export const GET = async (req: Request) => {
  try {
    const brands = await prisma.brand.findMany({orderBy:[{brandName: "desc"}]});
    return NextResponse.json({ brands }, { status: 200 });
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
    const body = await req.json();

    const { brandName, brandImageUrl } = brandSchema.parse(body);

    console.log(brandName, brandImageUrl);
    const checkbBrandName = await prisma.brand.findFirst({
      where: { brandName },
    });
    
    if (checkbBrandName) {
      return new NextResponse("Brand name Exist", { status: 500 });
    }

    const brandData = await prisma.brand.create({
      data: {
        brandName,
        brandImageUrl,
      },
    });

    return NextResponse.json(
      { brandData, messsage: "Brand Created Successfully" },
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
