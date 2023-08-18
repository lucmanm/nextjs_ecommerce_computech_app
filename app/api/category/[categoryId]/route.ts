import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export const GET = async (req: Request) => {
    try {
        const productCategory = await prisma.product.findMany({
            where: { categoryId: 1 },
        });
        return NextResponse.json(
            { message: "success", productCategory },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "fetching cetegory Error" },
            { status: 405 }
        );
    }
};
