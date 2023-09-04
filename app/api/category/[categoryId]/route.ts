import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { categoryId: string } }
) {
    const categorySlug = parseInt(params.categoryId);
    try {
        const productCategory = await prisma.product.findMany({
            where: { categoryId: categorySlug },
        });
        return NextResponse.json(
            { message: "success", productCategory },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong fetch category" },
            { status: 500 }
        );
    }
}
