import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export const GET = async (req: Request) => {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(
            { message: "success", products },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "fetching product Error", error },
            { status: 500 }
        );
    }
};


const productFormschema = z.object({
    model: z.string(),
    description: z.string(),
    price: z.number(),
    salePrice: z.number(),
    stock: z.number(),
    brandId: z.string(),
    categoryId: z.string(),
})

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            model,
            description,
            price,
            salePrice,
            stock,
            brandId,
            categoryId,
        } = productFormschema.parse(body);

        const checkModel = await prisma.product.findFirst({
            where: { model },
        });
        if (checkModel) {
            return NextResponse.json(
                { message: "this Product Already Created!" },
                { status: 409 }
            );
        }

        const createProduct = await prisma.product.create({
            data: {
                model,
                description,
                price,
                salePrice,
                stock,
                brandId,
                categoryId,
            },
        });

        return NextResponse.json(
            { createProduct, message: "Product Succesfully Created" },
            { status: 200 }
        );
    } catch (error) {
        console.log("PRODUCT_ERROR", error);

        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
