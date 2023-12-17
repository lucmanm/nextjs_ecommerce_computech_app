import { prisma } from "@/lib/db";
import { categorySchema } from "@/types/validation";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { categoryId: string } }) {
  try {
    
    const body = await req.json();
    const { category } = categorySchema.parse(body);
    
    const UpdateCategory = await prisma.category.update({
      where: { categoryId: params.categoryId },
      data: {
        categoryName: category
      },
    });

    return NextResponse.json({ UpdateCategory, messsage: "Category Updated Successfully",},{ status: 202 });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "ERROR_PATCH_CATEGORY", error },
      { status: 501 }
    );
  }
}

export async function DELETE(req: Request, { params }: { params: { categoryId: string } }
) {
  try {
    const deleteCategory = await prisma.category.delete({
      where: { categoryId: params.categoryId }
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

// export async function GET(req: Request, { params }: { params: { categoryId: string } }) {
//   try {
//     const { categoryId } = params;

//     const productsByCategoryId = await prisma.product.findMany({
//       where: {
//         categoryId,
//         isLive: true
//       },
//       include: {
//         images: true,
//         brand: true
//       }
//     })

//     return NextResponse.json(productsByCategoryId, { status: 200 });

//   } catch (error) {
//     return NextResponse.json(
//       { message: "fetching category Error", error },
//       { status: 500 }
//     );
//   }
// };
