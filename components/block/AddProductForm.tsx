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
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    model: z.string().min(1, "Username is required").max(50),
    description: z.string().min(1, "Please Enter Product description"),
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

const AddProductForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "",
      description: "",
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
        model: values.model,
        description: values.description,
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
        className="mx-auto my-10 w-full space-y-8 rounded-md border-black bg-white p-4 capitalize "
      >
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>model</FormLabel>
              <FormControl>
                <Input placeholder="model" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter product description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>price</FormLabel>
              <FormControl>
                <Input
                type="number"
                  placeholder="Please enter price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salesPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>price</FormLabel>
              <FormControl>
                <Input
                type="number"
                  placeholder="Sale Price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" size={"sm"} variant="default" className="w-full">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default AddProductForm;
