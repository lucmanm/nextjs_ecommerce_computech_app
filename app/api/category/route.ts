import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export const GET = async (req: Request, res: NextResponse) => {
  try {
    const category = await db.category.findMany();
    return NextResponse.json({ message: "success", category }, { status: 200 });
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
