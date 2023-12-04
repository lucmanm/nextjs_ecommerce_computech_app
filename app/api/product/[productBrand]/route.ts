import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { productBrand: string } }) {
  try {

    const productData = await prisma.product.findMany({
      where: {
        brand:{
          brand: params.productBrand
        },
        isLive: true
      },
      include: {
        images: true,
        brand: true,
      }
    })

    if (!productData) {
      return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE"}, { status: 500 })
    }else{

      return NextResponse.json({ productData }, { status: 200 })
    }

  
  } catch (error) {
    return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE", error }, { status: 500 })
  }
}