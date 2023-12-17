import { parsedEnv } from "../env";

const URL = `${parsedEnv.NEXT_PUBLIC_API_URL}/brand`;

export async function getBrands() {

  const res = await fetch(`${URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product categories");
  }
  const data = await res.json();
  return data.brands;
}

