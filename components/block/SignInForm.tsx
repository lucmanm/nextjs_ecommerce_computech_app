"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    email: z
        .string()
        .min(1, "Please Enter your Email")
        .email("Invalid Email address"),
    password: z
        .string()
        .min(1, "Please enter your password")
        .min(8, "Password Must  atleast 8 characters"),
});

const SignInForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const signInData = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        if (signInData?.error) {
            console.log(signInData.error);
        } else {
            router.push("/dashboard");
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto my-20 w-full space-y-8 rounded-md border-black bg-white p-4 shadow-md md:w-1/3">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
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
                                    type="password"
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
                    Sign In
                </Button>
                <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block  after:h-px after:flex-grow after:bg-stone-400">
                    or
                </div>
                <GoogleSignInButton>
                    <Mail className="mr-2 h-4 w-4" /> Sign in with Google
                </GoogleSignInButton>
                <p className="text-center text-gray-600">
                    If you don&apos;t have an account, please&nbsp;.
                    <Link
                        className="inline text-blue-500 hover:underline"
                        href="/sign-up">
                        Sign up
                    </Link>
                </p>
            </form>
        </Form>
    );
};

export default SignInForm;
