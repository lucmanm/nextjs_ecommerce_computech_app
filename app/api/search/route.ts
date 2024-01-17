import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {

  try {
    // Search Query Option 1
    const searchParams = req.nextUrl.searchParams 
    const query  = searchParams ? searchParams.get("q") : null

    // Search Query Option 2
    // const { searchParams } = new URL(req.url)
    // const searchQuery = searchParams ? searchParams.get("q") : null
    // const query = decodeURI(searchQuery || "")

    const products = await prisma.product.findMany({
      where: {
        OR: [{
          description: {
            contains: query?.toString(),
            mode: "insensitive"
          }
        },
        {
          model: {
            contains: query?.toString(),
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
