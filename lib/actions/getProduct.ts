import { Product } from "@/types/table-types";

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
    if (!res.ok) {
        throw new Error("Failed to fetch categoryid");
    }
    const data = await res.json();
    return data.products;
}

export async function getProductById(productID: string): Promise<Product> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productID}`);
    if (!res.ok) {
        throw new Error("Failed to fetch categoryid");
    }
    const data = await res.json();
    return data.product;
}


