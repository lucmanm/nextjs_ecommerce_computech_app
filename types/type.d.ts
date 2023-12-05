import { z } from "zod";
import { brandSchema, categorySchema, productFormSchema } from "./validation";

type TProduct = z.infer<typeof productFormSchema>

type TBrand = z.infer<typeof brandSchema>

type TCategory = z.infer<typeof categorySchema>
