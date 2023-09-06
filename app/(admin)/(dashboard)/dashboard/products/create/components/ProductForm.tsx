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
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Brand, Category } from "@prisma/client";

interface ProductFormProps {
  categories: Category[];
  brands: Brand[];
}

const formSchema = z.object({
  model: z.string().min(4, "Model Number required").max(50),
  productDescription: z.string().min(5, "Please Enter Product description"),
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

const ProductForm: React.FC<ProductFormProps> = ({ categories, brands }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "",
      productDescription: "",
      price: 0,
      salePrice: 0,
      stock: 0,
      brandId: "",
      categoryId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    const response = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        model: values.model,
        description: values.productDescription,
        price: values.price,
        salePrice: values.salePrice,
        stock: values.stock,
        brandId: values.brandId,
        categoryId: values.categoryId,
      }),
    });
    if (response.ok) {
      setLoading(false);
      toast({
        description: "Product Successfully Created",
        variant: "success",
      });
      // router.push();
    } else {
      toast({
        description: "Product Alredy Exist",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
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
          name="productDescription"
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
                  {brands.map(({ id, brand }) => (
                    <SelectItem key={id} value={id}>
                      <span className="capitalize">{brand}</span>
                    </SelectItem>
                  ))}
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
                  {categories.map(({ category, id }) => (
                    <SelectItem key={id} value={id}>
                      <span className="capitalize">{category}</span>
                    </SelectItem>
                  ))}
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
  );
};

export default ProductForm;
