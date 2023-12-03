import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { productSlug: string } }) {
  try {


    const brandProductData = await prisma.product.findMany({
      where: {
        brand: {
          brand: params.productSlug
        }
      },
      include: {
        images: true,
        brand: true,
      }
    })
    if (!brandProductData) {
      return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE"}, { status: 500 })
    }
    else {
      return NextResponse.json({ brandProductData }, { status: 200 })

    }


  } catch (error) {
    return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE", error }, { status: 500 })
  }
}