// Import necessary modules
import { db } from "@/lib/db"; // Import database connection from a module
import { NextResponse } from "next/server"; // Import NextResponse class from Next.js
import { hash } from "bcrypt"; // Import the hash function from the bcrypt library
import { z } from "zod"; // Import the zod library for input validation

// Define a schema for input validation using zod
const userSchema = z.object({
    username: z.string().min(1, "Username is required").max(50), // Username validation
    email: z
        .string()
        .min(1, "Please Enter your Email")
        .email("Invalid Email address"), // Email validation
    password: z
        .string()
        .min(1, "Please enter your password")
        .min(8, "Password Must be at least 8 characters"), // Password validation
});

// Define an async function to handle POST requests
export async function POST(req: Request) {
    try {
        // Parse the JSON body of the request
        const body = await req.json();

        // Validate and extract username, email, and password from the parsed body
        const { username, email, password } = userSchema.parse(body);

        // Check if the email is already registered
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email },
        });
        if (existingUserByEmail) {
            return NextResponse.json(
                {
                    user: null,
                    message: "User with this email already exists",
                },
                { status: 409 } // HTTP status code for conflict
            );
        }

        // Check if the username is already registered
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username },
        });
        if (existingUserByUsername) {
            return NextResponse.json(
                {
                    user: null,
                    message: "User with this username already exists",
                },
                { status: 409 } // HTTP status code for conflict
            );
        }

        // Hash the password using bcrypt with a salt factor of 10
        const hashedPassword = await hash(password, 10);

        // Create a new user in the database
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        // Extract the new user's data excluding the password
        const { password: newUserPassword, ...rest } = newUser;

        // Return a success response with user data
        return NextResponse.json(
            { user: rest, message: "User Created Successfully" },
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
