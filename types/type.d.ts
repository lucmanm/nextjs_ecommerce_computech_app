import { z } from "zod";
import { brandFormSchema, categoryFormSchema, productFormSchema } from "./validation";

type TProduct = z.infer<typeof productFormSchema>

type TBrand = z.infer<typeof brandFormSchema>

type TCategory = z.infer<typeof categoryFormSchema>