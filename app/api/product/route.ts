import { db } from "@/lib/db";
import { NextResponse } from "next/server";

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
        } = body;

        const checkModel = await db.product.findFirst({
            where: { model: model },
        });
        if (checkModel) {
            return NextResponse.json(
                { message: "this Product Already Created!" },
                { status: 409 }
            );
        }
        const createProduct = await db.product.create({
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
        console.log(createProduct);
        
        return NextResponse.json(
            { message: "Product Succesfully Created" },
            { status: 200 }
        );
                
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
