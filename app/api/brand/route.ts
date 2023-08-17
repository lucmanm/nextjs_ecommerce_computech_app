import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export default async function handler(req: Request) {
  try {
    if (req.method === "GET") {
      const brands = await prisma.brand.findMany();
      return  NextResponse.json(
        { message: "Success", brands },
        { status: 200 }
      );
    } else if (req.method === "POST") {
      const { name } = await req.json();

      const existingBrand = await prisma.brand.findFirst({
        where: { name },
      });

      if (existingBrand) {
        return  NextResponse.json(
          { message: "Brand Name Already Exists" },
          { status: 400 }
        );
      }

      const createdBrand = await prisma.brand.create({
        data: { name },
      });

      return  NextResponse.json(
        { message: "Brand Created Successfully", brand: createdBrand },
        { status: 201 }
      );
    } else {
      return  NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }
  } catch (error) {
    console.error(error);
    return  NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
