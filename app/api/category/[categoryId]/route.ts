import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    
    try {
        const categoryId = params.categoryId;
        const productCategory = await prisma.product.findMany({
            where: { id: categoryId },
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
