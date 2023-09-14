import { Product } from "@/types/table-types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/category`;

export async function getProductCategory() {
  const res = await fetch(`${URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product categories");
  }
  const data = await res.json();
  return data.categories;
}

export async function getProductCategoryId(categoryId: string): Promise<Product> {
  const res = await fetch(`${URL}/${categoryId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch categoryid");
  }
  const data = await res.json();
  return data.products;
}
