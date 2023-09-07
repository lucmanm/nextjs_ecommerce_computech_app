import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const sliderFormSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { label, imageUrl } = sliderFormSchema.parse(body);

    if (!label || !imageUrl) {
      return new NextResponse("Slider Data Empty", { status: 400 });
    }

    const sliderData = await prisma.slider.create({
      data: {
        label,
        imageUrl,
      },
    });
    return NextResponse.json(sliderData);
  } catch (error) {
    console.log("SLIDER_ERROR", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
