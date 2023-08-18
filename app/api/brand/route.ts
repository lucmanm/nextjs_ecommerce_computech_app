import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
export const GET = async (req: Request, res: NextResponse) => {
    try {
        const brand = await prisma.brand.findMany();
        return NextResponse.json(
            { message: "success", brand },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "fetching cetegory Error", error },
            { status: 500 }
        );
    }
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name } = body;

        const checkbBrandName = await prisma.brand.findFirst({
            where: { name: name },
        });
        if (checkbBrandName) {
            return NextResponse.json({
                brand: null,
                message: "Brand Name Already Exist",
            });
        }

        const createBrand = await prisma.brand.create({
            data: { name },
        });
        return NextResponse.json(
            {
                user: createBrand,
                messsage: "Brand Created Successfully",
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
