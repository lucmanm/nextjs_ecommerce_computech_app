import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name } = body;

        const checkbBrandName = await db.brand.findFirst({
            where: { name: name },
        });
        if (checkbBrandName) {
            return NextResponse.json({
                brand: null,
                message: "Brand Name Already Exist",
            });
        }

        const createBrand = await db.brand.create({
            data: { name },
        });
        return NextResponse.json({
            user: createBrand,
            messsage: "Brand Created Successfully",
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
