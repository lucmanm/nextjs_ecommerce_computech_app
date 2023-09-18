import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";



export async function GET(req: Request) {
    try {


        const categories = await prisma.category.findMany();
        return NextResponse.json(
            { categories },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: "fetching category Error", error },
            { status: 500 }
        );
    }
};



export async function POST(req: Request) {
    const categorySchema = z.object({
        category: z.string().toLowerCase()
    })
    try {
        const body = await req.json();
        const { category } = categorySchema.parse(body);

        const checkbCategoryName = await prisma.category.findFirst({
            where: { category },
        });
        if (checkbCategoryName) {
            return NextResponse.json({
                category: null,
                message: "Category Name Already Exist",
            }, { status: 400 });
        }

        const createCategory = await prisma.category.create({
            data: { category },
        });

        return NextResponse.json({
            user: createCategory,
            messsage: "Category Created Successfully",
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
