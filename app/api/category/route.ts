import { prisma } from "@/lib/db";
import { categorySchema } from "@/types/validation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const categories = await prisma.category.findMany({
            orderBy:{
                categoryName: "asc"
            }
        });
        return NextResponse.json(
            { categories },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: "FETCH_ERROR_CATEGORY", error },
            { status: 500 }
        );
    }
};

export async function POST(req: Request) {

    try {
        const body = await req.json();
        const { categoryName } = categorySchema.parse(body);

        const checkbCategoryName = await prisma.category.findFirst({
            where: { categoryName },
        });
        if (checkbCategoryName) {
            return NextResponse.json({
                category: null,
                message: "Category Name Already Exist",
            }, { status: 400 });
        }

        const createCategory = await prisma.category.create({
            data: { categoryName },
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
