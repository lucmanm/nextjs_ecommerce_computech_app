import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

// Define a schema for input validation using zod
const productSchema = z.object({
    model: z.string().min(4, "Model Number required").max(50),
    productDescription: z.string().min(5, "Please Enter Product description"),
    price: z.number().safe(),
    salePrice: z.number().safe(),
    stock: z.number().safe(),
});

// Define an async function to handle POST requests
export async function POST(req: Request) {
    try {
        // Parse the JSON body of the request
        const body = await req.json();

        // Validate and extract username, email, and password from the parsed body
        const { model, productDescription, price, salePrice, stock } =
            productSchema.parse(body);

        // Check if the email is already registered
        const existingProduct = await db.product.findUnique({
            where: { model: model },
        });
        if (existingProduct) {
            return NextResponse.json(
                {
                    message: "This Model already Exist",
                },
                { status: 409 } // HTTP status code for conflict
            );
        }
        // Create a new Product  in the database
        const newUser = await db.product.create({
            data: {
                model: model,
                description: productDescription,
                price: price,
                salePrice: salePrice,
                stock: stock,
            },
        });

        // Return a success response with user data
        return NextResponse.json(
            { product: newUser, message: "Product Created Successfully" },
            { status: 201 } // HTTP status code for created
        );
    } catch (error) {
        // Handle errors and return an error response
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 } // HTTP status code for internal server error
        );
    }
}
