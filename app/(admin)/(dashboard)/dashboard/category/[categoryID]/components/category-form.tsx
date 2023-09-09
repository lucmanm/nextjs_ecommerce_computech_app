"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useParams, useRouter } from "next/navigation";

import { Loader } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Category } from "@prisma/client";
import Container from "@/app/(admin)/components/Container";

const formSchema = z.object({
  category: z.string().min(1, "Please enter brand name."),
});

interface SliderFormProps {
  initialData: Category | null;
}

export const BrandForm: React.FC<SliderFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Category" : "Create Category";
  const description = initialData ? "Edit a Category" : "Create a new Category";
  const toastMessage = initialData
    ? "Category updated successfully?"
    : "Created successfully Category";
  const action = initialData ? "Save Changes" : "Create";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      category: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      if (initialData) {
        const response = await fetch(`/api/category/${params.categoryID}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            category: values.category,
          }),
        });
        if (response.ok) {
          toast({
            description: toastMessage,
            variant: "success",
          });
          router.refresh();
          router.push("/dashboard/category");
        }
      } else {
        const response = await fetch(`/api/category`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            category: values.category,
          }),
        });
        if (response.ok) {
          toast({
            description: toastMessage,
            variant: "success",
          });
          router.refresh();
          router.push("/dashboard/category");
        } else {
          toast({
            description: "Category exist",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        description: `[ERROR_CATEGORY], Something Went Wong: ${error}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container title={title} description={description}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-2 w-1/2 space-y-2 rounded-md border-black bg-white p-4 capitalize "
          >
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Please enter category."
                      className="capitalize"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="sm"
              variant="default"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait....
                </>
              ) : (
                action
              )}
            </Button>
          </form>
        </Form>
      </Container>
    </>
  );
};
