"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Brand, Category, Image, Product } from "@prisma/client";
import Container from "@/app/(admin)/components/Container";
import ImageUpload from "@/components/ui/image-upload";
import { Checkbox } from "@/components/ui/checkbox";
import { Decimal } from "@prisma/client/runtime/library";

interface ProductFormProps {
  productData: (Product & { images: Image[] }) | null;
  categories: Category[];
  brands: Brand[];
}

const formSchema = z.object({
  // issue #3
  model: z.string().min(4, "Model Number required").max(20),
  description: z.string().min(5, "Please Enter Product description"),
  price: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .nonnegative({ message: "Negative is  not allowed" })
    .min(1),
  salePrice: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .nonnegative({ message: "Negative is  not allowed" })
    .min(0),
  stock: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .nonnegative({ message: "Negative is  not allowed" }),
  brandId: z.string().min(1),
  categoryId: z.string().min(1),
  images: z
    .object({
      imageUrl: z.string(),
    })
    .array(),
  isLive: z.boolean().default(false).optional(),
  isFeatured: z.boolean().default(false).optional(),
});

const ProductForm: React.FC<ProductFormProps> = ({
  productData,
  categories,
  brands,
}) => {
  const params = useParams();
  const router = useRouter();

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: productData
      ? {
          ...productData,
          price: parseFloat(String(productData?.price)),
          salePrice: parseFloat(String(productData?.salePrice)),
        }
      : {
          model: "",
          description: "",
          images: [],
          price: 0.0,
          salePrice: 0.0,
          stock: 0,
          brandId: "",
          categoryId: "",
          isLive: false,
          isFeatured: false,
        },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      if (productData) {
        const response = await fetch(`/api/product/${params.productID}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            model: values.model,
            description: values.description,
            price: values.price,
            salePrice: values.salePrice,
            stock: values.stock,
            brandId: values.brandId,
            categoryId: values.categoryId,
            images: values.images,
            isLive: values.isLive,
          }),
        });
        if (response.ok) {
          toast({
            description: "Product Successfully updated",
            variant: "success",
          });
        }
      } else {
        const response = await fetch("/api/product", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            model: values.model,
            description: values.description,
            price: values.price,
            salePrice: values.salePrice,
            stock: values.stock,
            brandId: values.brandId,
            categoryId: values.categoryId,
            images: values.images,
            isLive: values.isLive,
            isFeatured: values.isFeatured,
          }),
        });
        if (response.ok) {
          toast({
            description: "Product Successfully Created",
            variant: "success",
          });
        }
      }
    } catch (error) {
      console.log("ERROR_PRODUCT_ADD_UPDATE", error);
      toast({
        description: "Product Alredy Exist",
        variant: "destructive",
      });
    } finally {
      router.refresh();
      router.push(`/dashboard/products`);
      setLoading(false);
    }
  };

  return (
    <Container
      title="Create Product"
      description="Complete the required infomration."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-2 flex flex-col space-y-2 rounded-md border-black bg-white p-4 capitalize md:grid md:grid-cols-3 md:gap-4"
        >
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem className="md:col-span-3">
                <FormControl>
                  <ImageUpload
                    value={field.value.map((image) => image.imageUrl)}
                    disabled={loading}
                    onChange={(imageUrl) =>
                      field.onChange([...field.value, { imageUrl }])
                    }
                    onRemove={(imageUrl) =>
                      field.onChange([
                        ...field.value.filter(
                          (current) => current.imageUrl !== imageUrl
                        ),
                      ])
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <FormControl>
                  <Input placeholder="Model" {...field} />
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
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Product Description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brandId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-black">
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select Brand"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {brands.map(({ id, brand }) => (
                        <SelectItem key={id} value={id}>
                          <span className="capitalize">{brand}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map(({ category, id }) => (
                        <SelectItem key={id} value={id}>
                          <span className="capitalize">{category}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                  <Input type="number" placeholder="Selling Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sale Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Sale Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stock available</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Quantity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isLive"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Publish or Unplublish</FormLabel>
                  <FormDescription>
                    Select check if you want to publish uncheck for unpublish{" "}
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size={"sm"}
            variant="default"
            className="w-full md:col-span-3"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Please Wait....
              </>
            ) : (
              "Save"
            )}
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default ProductForm;
