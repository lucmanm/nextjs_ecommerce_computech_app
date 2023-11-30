import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";


export const GET = async (req: Request) => {

    const { searchParams } = new URL(req.url)

    const searchQuery = searchParams ? searchParams.get("q") : null


    //     try {
    //         const products = await prisma.product.findMany({
    //             where: {
    //                 isLive: true
    //             },
    //             include: {
    //                 images: true,
    //                 brand: true,
    //             }
    //         });
    //         return NextResponse.json(
    //             { products },
    //             { status: 200 }
    //         );
    //     } catch (error) {
    //         return NextResponse.json(
    //             { message: "fetching product Error", error },
    //             { status: 500 }
    //         );
    //     }

    return NextResponse.json({ message: searchQuery })

};
