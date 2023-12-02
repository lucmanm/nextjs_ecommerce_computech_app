import { z } from "zod";
import { productFormSchema } from "./validation";

type TProductForm = z.infer<typeof productFormSchema>