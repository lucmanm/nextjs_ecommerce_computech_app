import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { categoryId: string, productId: string } }) {

    try {

        const product = await prisma.product.findUnique({
            where: {
                id: params.productId,
                categoryId: params.categoryId
            },
            include: {
                images: true,
                brand: true
            }
        })

        return NextResponse.json({ product }, { status: 200 })

    } catch (error) {
        console.log("ERROR_PRODUCT_BY_CATEGORY_&_PRODUCTID", error);
        return NextResponse.json({ message: "[ERROR_PRODUCT_BY_CATEGORY_&_PRODUCTID], something went wrong" }, { status: 500 })
    }
}