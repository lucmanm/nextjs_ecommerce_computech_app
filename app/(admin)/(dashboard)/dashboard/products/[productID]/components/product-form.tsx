"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../../../../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../../../components/ui/form";
import { Input } from "../../../../../../../components/ui/input";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Brand, Category, Product } from "@prisma/client";
import Container from "@/app/(admin)/components/Container";

interface ProductFormProps {
  productData: Product | null;
  categories: Category[];
  brands: Brand[];
}

const formSchema = z.object({
  model: z.string().min(4, "Model Number required").max(50),
  description: z.string().min(5, "Please Enter Product description"),
  price: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .nonnegative({ message: "Negative is  not allowed" }),
  salePrice: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .nonnegative({ message: "Negative is  not allowed" }),
  stock: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .nonnegative({ message: "Negative is  not allowed" }),
  brandId: z.string(),
  categoryId: z.string(),
});

const ProductForm: React.FC<ProductFormProps> = ({
  productData,
  categories,
  brands,
}) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: productData || {
      model: "",
      description: "",
      price: 0,
      salePrice: 0,
      stock: 0,
      brandId: "",
      categoryId: "",
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
          }),
        });
        router.refresh();
        router.push("/dashboard/products");
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
          className="my-2 w-1/2 space-y-2 rounded-md border-black bg-white p-4 capitalize "
        >
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
                      <SelectLabel>Select Brand</SelectLabel>
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
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select Category"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Category</SelectLabel>
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
              "Save"
            )}
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default ProductForm;
