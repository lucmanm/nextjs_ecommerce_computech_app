"use client";
// Hooks
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

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
import ImageUpload from "@/components/ui/image-upload";
import Container from "@/app/(admin)/(route)/dashboard/_components/Container";
// Icons
import { Loader } from "lucide-react";

// type &  Schema
import { TBrand } from "@/types/type";
import { brandSchema } from "@/types/validation";

type BrandProps = {
  initialData: TBrand  | null;
}

export const BrandForm: React.FC<BrandProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Brand" : "Create Brand";
  const description = initialData ? "Edit a Brand" : "Create a new Brand";
  const toastMessage = initialData
    ? "Brand updated successfully?"
    : "Created successfully Brand";
  const action = initialData ? "Save Changes" : "Create";

  const form = useForm<TBrand>({
    resolver: zodResolver(brandSchema),
    defaultValues: initialData || {
      brandName: "",
      brandImageUrl: "",
    },
  });

  const onSubmit = async (values: TBrand) => {
    try {
      setLoading(true);
      if (initialData) {
        const response = await fetch(`/api/brand/${params.brandId}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            brand: values.brandName,
            brandImageUrl: values.brandImageUrl,
          }),
        });
        if (response.ok) {
          toast({
            description: toastMessage,
            variant: "success",
          });
          router.refresh();
          router.push("/dashboard/brands");
        }
      } else {
        const response = await fetch(`/api/brand`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            brand: values.brandName,
            brandImageUrl: values.brandImageUrl,
          }),
        });
        if (response.ok) {
          toast({
            description: toastMessage,
            variant: "success",
          });
          router.refresh();
          router.push("/dashboard/brands");
        } else {
          toast({
            description: "Brand exist",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        description: `[ERROR_POST_PATCH_BRAND]: ${error}`,
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
              name="brandImageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slider Image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={loading}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Brand Name"
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
