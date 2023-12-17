
const URL = `${process.env.NEXT_PUBLIC_API_URL}/brand`;

export async function getBrands() {

  const res = await fetch(`${URL}`);
  if (!res.ok) {
    throw new Error("FAILED_FETCH_BRAND");
  }
  const data = await res.json();
  return data.brands;
}

