import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";
import { prisma } from "@/lib/db";

const userSchema = z.object({
    username: z.string().min(1, "Username is required").max(50),
    email: z
        .string()
        .min(1, "Please Enter your Email")
        .email("Invalid Email address"),
    password: z
        .string()
        .min(1, "Please enter your password")
        .min(8, "Password Must be at least 8 characters"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { username, email, password } = userSchema.parse(body);

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email },
        });
        if (existingUserByEmail) {
            return NextResponse.json(
                {
                    user: null,
                    message: "User with this email already exists",
                },
                { status: 409 }
            );
        }

        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username },
        });
        if (existingUserByUsername) {
            return NextResponse.json(
                {
                    user: null,
                    message: "User with this username already exists",
                },
                { status: 409 }
            );
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json(
            { user: rest, message: "User Created Successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
