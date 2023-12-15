"use client";
// Hooks
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

//Icons
import { Loader } from "lucide-react";

// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Container from "@/app/(admin)/(dashboard)/dashboard/components/Container";

// Type & Schema
import { TCategory } from "@/types/type";
import { categorySchema } from "@/types/validation";


type CategoryProps = {
  initialData: {
    category: string
  } | null;
}

export const CategoryForm: React.FC<CategoryProps> = ({ initialData }) => {
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

  const form = useForm<TCategory>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialData || {
      category: "",
    },
  });

  const onSubmit = async (values: TCategory) => {
    try {
      setLoading(true);
      
      if (initialData) {
        const response = await fetch(`/api/category/${params.categoryId}`, {
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
            className="my-2 w-1/2 space-y-2 rounded-md border-black bg-white p-4 capitalize"
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
