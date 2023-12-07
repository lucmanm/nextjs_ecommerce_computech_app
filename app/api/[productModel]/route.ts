import { prisma } from "@/lib/db";
import { productFormSchema } from "@/types/validation";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { productModel: string } }) {
    try {

        const body = await req.json()
        const { model, description, price, salePrice, stock, brandId, categoryId, images } = productFormSchema.parse(body)


        const product = await prisma.product.update({
            where: {
                id: params.productModel
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
        return NextResponse.json({ message: "[ERROR_PRODUCT_UPDATE" }, { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { productModel: string } }) {
    try {

        const deleteImages = await prisma.image.deleteMany({
            where: {
               productId : params.productModel
            }
        });
        const deleteProduct = await prisma.product.delete({
            where: {
                id: params.productModel
            }
        })

        if (!deleteProduct || deleteImages) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(deleteProduct)

    } catch (error) {
        console.log("ERROR_PRODUCT_DELETE", error);
        return NextResponse.json({ message: "[ERROR_PRODUCT_DELETE]" }, { status: 500 })
    }
}

export async function GET(req: Request, { params }: { params: { productModel: string } }) {
    try {

        const productData= await prisma.product.findFirst({
            where: {
                model: params.productModel,
                isLive: true
            },
            include: {
                images: true,
                brand: true
            }
        })

        return NextResponse.json({ productData }, { status: 200 })


    } catch (error) {
        console.log("[ERROR_GET_PRODUCT]", error);
        return NextResponse.json({ message: "[ERROR_GET_PRODUCT]" }, { status: 500 })
    }
}