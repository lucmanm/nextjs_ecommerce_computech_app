import { z } from "zod";





// Product Schema
export const productFormSchema = z.object({
    model: z.string().min(4, "Model Number required").max(20),
    description: z.string().min(5, "Please Enter Product description"),
    price: z.coerce.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        })
        .nonnegative({ message: "Negative is  not allowed" })
        .min(1),
    salePrice: z.coerce.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        })
        .nonnegative({ message: "Negative is  not allowed" })
        .min(0),
    stock: z.coerce.number({required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        })
        .nonnegative({ message: "Negative is  not allowed" }),
    brandId: z.string().min(1),
    categoryId: z.string().min(1),
    images: z.object({imageUrl: z.string(),
        })
        .array(),
    isLive: z.boolean().default(false).optional(),
    isFeatured: z.boolean().default(false).optional(),
});

// Brand Schema
export const brandSchema = z.object({
    id: z.string().optional(),
    brand: z.string().min(1, "Please enter brand name."),
    imageUrl: z.string().min(1, "Please upload image"),
})

// Category Schema
export const categorySchema = z.object({
    id: z.string().optional(),
    category: z.string().min(1, "Please Enter Category."),
    createdAt: z.date().transform((date) => date.toLocaleDateString()).optional()
});

// Slider Home Props 
export const sliderSchema = z.object({
    id: z.string(),
    label: z.string(),
    imageUrl: z.string(),
  });
