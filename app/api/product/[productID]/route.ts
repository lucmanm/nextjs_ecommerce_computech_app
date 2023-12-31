import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function PATCH(req: Request, { params }: { params: { productID: string } }) {
    try {
        const productFormschema = z.object({
            model: z.string(),
            description: z.string(),
            price: z.number(),
            salePrice: z.number(),
            stock: z.number(),
            brandId: z.string(),
            categoryId: z.string(),
            images: z.array(z.object({
                imageUrl: z.string()
            }))
        })

        // const checkProduct = await prisma.product.findFirst({
        //     where: {
        //         id: params.productID
        //     }
        // })
        // if (!checkProduct) {
        //     return NextResponse.json({ message: "Request not exist" }, { status: 500 })
        // }

        const body = await req.json()
        const { model, description, price, salePrice, stock, brandId, categoryId, images } = productFormschema.parse(body)


        const product = await prisma.product.update({
            where: {
                id: params.productID
            },
            data: {
                model, description, price, salePrice, stock, brandId, categoryId,
                images: {
                    deleteMany: {},
                    createMany: {
                        data: [
                            ...images.map((image: { imageUrl: string }) => image),
                        ]
                    }
                },
            }
        })


        return NextResponse.json({ message: "Update accepted", product }, { status: 201 })

    } catch (error) {
        console.log("ERROR_PRODUCT_UPDATE", error);
        return NextResponse.json({ message: "[ERROR_PRODUCT_UPDATE], something went wrong" }, { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { productID: string } }) {
    try {

        const deleteImages = await prisma.image.deleteMany({
            where: {
                productId: params.productID
            }
        });
        const deleteProduct = await prisma.product.delete({
            where: {
                id: params.productID
            }
        })

        if (!deleteProduct || deleteImages) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(deleteProduct)

    } catch (error) {
        console.log("ERROR_PRODUCT_DELETE", error);
        return NextResponse.json({ message: "[ERROR_PRODUCT_DELETE], something went wrong" }, { status: 500 })
    }
}

export async function GET(req: Request, { params }: { params: { productID: string } }) {

    try {

        const product = await prisma.product.findUnique({
            where: {
                id: params.productID
            },
            include: {
                images: true,
                brand: true
            }
        })

        return NextResponse.json({ product }, { status: 200 })

    } catch (error) {
        console.log("ERROR_PRODUCT_GET_ID", error);
        return NextResponse.json({ message: "[ERROR_PRODUCT_GET_ID], something went wrong" }, { status: 500 })
    }
}
