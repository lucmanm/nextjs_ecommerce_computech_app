import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { productSlug: string } }) {
  try {


    const productByCategoryData = await prisma.product.findMany({
      where: {
        category:{
          category: params.productSlug
        }
      },
      include: {
        images: true,
        brand: true,
      }
    })
    if (!productByCategoryData) {
      return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE"}, { status: 500 })
    }else{

      return NextResponse.json({ productByCategoryData }, { status: 200 })
    }

  
  } catch (error) {
    return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE", error }, { status: 500 })
  }
}