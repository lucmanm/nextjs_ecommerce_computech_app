"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { useRouter } from "next/navigation";

const formSchema = z
    .object({
        username: z.string().min(1, "Username is required").max(50),
        email: z
            .string()
            .min(1, "Please Enter your Email")
            .email("Invalid Email address"),
        password: z
            .string()
            .min(1, "Please enter your password")
            .min(8, "Password Must  atleast 8 characters"),
        confirmPassword: z
            .string()
            .min(1, "Password confirmation is required ")
            .min(8, "Password Must  atleast 8 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passowrd does not match",
    });

const SignUpForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch("/api/user", {
            method: "Post",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password,
            }),
        });
        if (response.ok) {
            router.push("/sign-in");
        } else {
            console.log("Registration Failed");
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto my-20 w-full space-y-8 rounded-md border-black bg-white p-4 capitalize shadow-md md:w-1/3">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>username</FormLabel>
                            <FormControl>
                                <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Please enter your email address"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter Your Passord"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    size={"sm"}
                    variant="default"
                    className="w-full">
                    Sign Up
                </Button>
                <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block  after:h-px after:flex-grow after:bg-stone-400">
                    or
                </div>
                <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
                <p className="text-center text-gray-600">
                    If you don&apos;t have an account, please&nbsp;.
                    <Link
                        className="inline text-blue-500 hover:underline"
                        href="/sign-in">
                        Sign up
                    </Link>
                </p>
            </form>
        </Form>
    );
};

export default SignUpForm;
