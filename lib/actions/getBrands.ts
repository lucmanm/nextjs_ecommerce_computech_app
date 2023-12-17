
export async function getBrands() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brand`);
  if (!res.ok) {
    throw new Error("FAILED_FETCH_BRAND");
  }
  const data = await res.json();
  return data.brands;
}

