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
        const { model, description, price, salePrice, stock, brandId, categoryId } = productFormschema.parse(body)
        const product = await prisma.product.update({
            where: {
                id: params.productID
            },
            data: {
                model, description, price, salePrice, stock, brandId, categoryId
            }
        })
        return NextResponse.json({ message: "Update accepted", product }, { status: 201 })

    } catch (error) {
        console.log("ERROR_PRODUCT_UPDATE", error);
        return NextResponse.json({ message: "[ERROR_PRODUCT_UPDATE], something went wrong" }, { status: 500 })
    }
}