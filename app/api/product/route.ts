import { prisma } from "@/lib/db";
import { productFormSchema } from "@/types/validation";
import { NextResponse } from "next/server";
import { z } from "zod";

export const GET = async (req: Request) => {

    try {
        const products = await prisma.product.findMany({
            where: {
                isFeatured: true
            },
            include: {
                images: true,
                brand: true,
            }
        });
        return NextResponse.json(
            { products },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "fetching product Error", error },
            { status: 500 }
        );
    }
};

export async function POST(req: Request) {
    try {

        const productFormSchemaExt = productFormSchema.extend({
            taxValue: z.number().default(15),
        })


        const body = await req.json();
        const {
            model,
            description,
            price,
            salePrice,
            stock,
            brandId,
            categoryId,
            images,
            isLive,
            isFeatured,
            taxValue,
        } = productFormSchemaExt.parse(body);


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
                taxValue,
                isLive,
                isFeatured,
                images: {
                    createMany: {
                        data: [
                            ...images.map((image: { imageUrl: string }) => image)
                        ]
                    }
                }
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
