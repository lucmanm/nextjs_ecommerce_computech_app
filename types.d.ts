import { MouseEventHandler } from "react";
import { z } from "zod";


// export interface TopNavigationProps {
//     title?: string;
//     url?: string;
//     imageSrc?: string;
//     altImage?: string;
// }

export interface FooterInfoProps {
    title?: string;
    info?: string;
    url?: string;
}

export interface paymentMethodProps {
    title?: string;
}
export interface ListProps {
    description: string;
    imgLink: string;
    url: string;
}
export interface ProductCategoryProps {
    title?: string;
    list: ListProps[];
}

export interface SliderProps {
    sliderhead?: string;
    list: ListProps[];
    subtitle?: boolean;
    sliderSlide?: string;
    sliderCustomerStyle?: string;
    arrow?: boolean;
}

// Products Typescript
export const productColumnSchema = z.object({
    id: z.string(),
    description: z.string(),
    price: z.string(),
    salePrice: z.string(),
    model: z.string(),
    stock: z.number(),
    brand: z.string(),
    category: z.string(),
    createdAt: z.string(),
});

export type ProductColumnProps = z.infer<typeof productColumnSchema>;

// Products Typescript
export const brandColumnProps = z.object({
    id: z.string(),
    brand: z.string(),
    imageUrl: z.string(),
    createdAt: z.string()
})

export type BrandColumnProps = z.infer<typeof brandColumnProps>;

// Category Typescript
export const categoryColumnProps = z.object({
    id: z.string(),
    category: z.string(),
    createdAt: z.string()
})

export type CategoryColumnProps = z.infer<typeof categoryColumnProps>;

// Slider Types
export const sliderProps = z.object({
    id: z.string(),
    label: z.string(),
    imageUrl: z.string(),
    createdAt: z.string(),
})

export type SliderColumnProps = z.infer<typeof sliderProps>;