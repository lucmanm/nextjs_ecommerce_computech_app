import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { productType: string } }) {
  try {


    const products = await prisma.product.findMany({
      where: {
        brand: {
          brand: params.productType
        }
      },
      include: {
        images: true,
        brand: true,
    }
    })


    return NextResponse.json({ products }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE", error }, { status: 500 })
  }
}