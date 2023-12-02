import { z } from "zod";

export const productFormSchema = z.object({
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
