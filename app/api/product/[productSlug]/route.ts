import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { productSlug: string } }) {
  try {

    const productData = await prisma.product.findMany({
      where: {
        AND: [
          {
            OR: [
              {
                brand: {
                  brand: params.productSlug
                }
              },
              {
                category: {
                  category: params.productSlug
                },
              }

            ]
          }, {
            isLive: true
          }
        ]
      },
      include: {
        images: true,
        brand: true,
      }
    })

    if (!productData) {
      return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE" }, { status: 500 })
    } else {
      return NextResponse.json({ productData }, { status: 200 })
    }

  } catch (error) {
    return NextResponse.json({ message: "FAILED_REQUEST_PRODUCT_TYPE", error }, { status: 500 })
  }
}