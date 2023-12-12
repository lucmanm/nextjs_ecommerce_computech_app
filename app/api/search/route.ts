import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";


export const GET = async (req: Request) => {

  try {
    const { searchParams } = new URL(req.url)

    const searchQuery = searchParams ? searchParams.get("q") : null
    const searchOutput = decodeURI(searchQuery || "")

    const products = await prisma.product.findMany({
      where: {
        OR: [{
          description: {
            contains: searchOutput,
            mode: "insensitive"
          }
        },
        {
          model: {
            contains: searchOutput,
            mode: "insensitive"
          }
        }
        ]
      },
      include: {
        images: true,
        brand: true,
      }
    });

    return NextResponse.json(
      { message: "SUCCESS", products },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "FETCH SEARCH ERROR", error },
      { status: 500 }
    );
  }
};
