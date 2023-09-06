const URL = `${process.env.NEXT_PUBLIC_API_URL}/category`;
export async function getProductCategory() {
  const res = await fetch(`${URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product categories");
  }
  const data = await res.json();
  return data.categories;
}

export async function getProductCategoryslug(categoryslug: string) {
  const res = await fetch(`${URL}/${categoryslug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch categoryid");
  }
  const data = await res.json();
  return data.categories;
}
