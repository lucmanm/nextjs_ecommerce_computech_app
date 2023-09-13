import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function PATCH(
  req: Request,
  { params }: { params: { categoryID: string } }
) {
  try {
    const categorySchema = z.object({
      category: z.string().toLowerCase(),
    });
    const body = await req.json();
    const { category } = categorySchema.parse(body);
    const UpdateCategory = await prisma.category.update({
      where: { id: params.categoryID },
      data: {
        category: category
      },
    });

    return NextResponse.json(
      {
        UpdateCategory,
        messsage: "Category Updated Successfully",
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { categoryID: string } }
) {
  try {
    const deleteCategory = await prisma.category.delete({
      where: { id: params.categoryID }
    });

    return NextResponse.json(
      {
        deleteCategory,
        messsage: "Category deleted Successfully",
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, { params }: { params: { categoryID: string } }) {
  try {

    const categoryId = params.categoryID;
    const products = await prisma.product.findMany({
      where: {
        categoryId: categoryId
      }
    })

    if (!products.length) {
      return new NextResponse("No Available data in category", { status: 500 })
    }

    return NextResponse.json({ products }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "fetching category Error", error },
      { status: 500 }
    );
  }
};
