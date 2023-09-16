import { Product } from "@/types/table-types";

export async function getProductById(productID: string): Promise<Product> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productID}`);
    if (!res.ok) {
        throw new Error("Failed to fetch categoryid");
    }
    const data = await res.json();
    return data.product;
}


