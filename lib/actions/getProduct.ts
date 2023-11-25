import { Product } from "@/types/table-types";

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
    if (!res.ok) {
        throw new Error("Failed to fetch categoryid");
    }
    const data = await res.json();
    return data.products;
}

export async function getProductById(productId: string, categoryId: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${categoryId}/${productId}`, { next: { revalidate: 60 } });
    if (!res.ok) return undefined
    const data = await res.json();
    return data.product;
}
export async function getProductList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${categoryId}/${productId}`, { next: { revalidate: 60 } });
    if (!res.ok) return undefined
    const data = await res.json();
    return data.product;
}


