import { z } from "zod";
import { brandSchema, categorySchema, imageSchema, productFormSchema, sliderSchema } from "./validation";

export type TProduct = z.infer<typeof productFormSchema>

export type TBrand = z.infer<typeof brandSchema>

export type TCategory = z.infer<typeof categorySchema>

export type TSlider = z.infer<typeof sliderSchema>

export type TImage = z.infer<typeof imageSchema>
