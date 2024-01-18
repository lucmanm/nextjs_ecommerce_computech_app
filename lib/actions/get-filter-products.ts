type filerProps = {
    brand: { [key: string]: string | string[] | undefined }
    productCategory: string
}

export async function getFilerProducts(filters: filerProps) {
    const {brand, productCategory} = filters
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productCategory}?${brand}`);

    if (!res.ok) {
      throw new Error("FAILED_FILTER_PRODUCTS");
    }

    const data = await res.json();
    return data.searchQuery;
  }
  