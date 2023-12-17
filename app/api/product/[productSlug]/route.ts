import { prisma } from "@/lib/db"
import { productFormSchema } from "@/types/validation"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { productSlug: string } }) {
  try {
<<<<<<< HEAD
    
   
    const decodeURI =  params.productSlug.replace(/\s+/gi, '_')
=======
    // Decode to remove the space the params
    const decodedURI = params.productSlug.replace(/\s+/gi, '_');
>>>>>>> e1e6514aed8220126c4a18ece4ab6082f4a5a13b

    const productData = await prisma.product.findMany({
      where: {
        AND: [
          {
            OR: [
              {
                brand: {
<<<<<<< HEAD
                  brandName: {
                    contains: decodeURI.toLowerCase()
                  },
=======
                  brand: {
                    contains: decodedURI
                  }
>>>>>>> e1e6514aed8220126c4a18ece4ab6082f4a5a13b
                }
              },
              {
                category: {
<<<<<<< HEAD
                  category:{
                    contains: decodeURI.toLowerCase()
                  }
                  
=======
                  category: {
                    contains: decodedURI
                  }
>>>>>>> e1e6514aed8220126c4a18ece4ab6082f4a5a13b
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