import { prisma } from "@/lib/db"
import { productFormSchema } from "@/types/validation"
import { Image, Product } from "@prisma/client"
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

// FIXME Product Update on Category not working
// Continue Here
export async function PATCH(req: Request, { params }: { params: { productSlug: string } }) {
  try {
    const body = await req.json()
    const {model, description, price, salePrice,stock, brandId, categoryId, isLive, isFeatured, images} = productFormSchema.parse(body)
    const productId = params.productSlug

    if (!productId) {
      return new NextResponse("PORODUCT_ID_EMPTY", { status: 400 })
    }

    await prisma.product.update({
      where: {
        id: productId
      },
      data: {
        model,
        description,
        price, 
        salePrice,
        stock, 
        brandId,
        categoryId, 
        isLive,
        isFeatured,
        images: {
          deleteMany: {}
        },
      },
    })

    await prisma.product.update({
      where: {
        id: productId
      },
      data: {
        images: {
          createMany: {
            data: [
              ...images.map((image: { imageUrl: string }) => image),
            ]
          }
        }
      }
    })

    return NextResponse.json({ status: 201 })
  } catch (error) {
    console.log("ERROR_PATCH_PRODUCT", error);
    return NextResponse.json({ message: "ERROR_PATCH_PRODUCT", error }, { status: 501 })
  }
}