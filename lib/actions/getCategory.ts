
export async function getProductCategory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
  if (!res.ok) {
    throw new Error("Failed to fetch product categories");
  }
  const data = await res.json();
  return data.categories;
}


export async function getProductByCategoryId(categoryId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${categoryId}`);
  const data = await res.json();
  return data.products;
}
