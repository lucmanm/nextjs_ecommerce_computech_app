import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name } = body;

        const checkbCategoryName = await db.category.findFirst({
            where: { name: name },
        });
        if (checkbCategoryName) {
            return NextResponse.json({
                category: null,
                message: "Category Name Already Exist",
            });
        }

        const createCategory = await db.category.create({
            data: { name },
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
