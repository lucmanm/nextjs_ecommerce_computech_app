import { Product } from "@/types/table-types";

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
    if (!res.ok) {
        throw new Error("Failed to fetch categoryid");
    }
    const data = await res.json();
    return data.products;
}
// Display single products
export async function getProduct(product: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${product}`);
    if (!res.ok) return undefined
    const data = await res.json();
    return data.productData;
}
// product function getting product by Category
export async function getProductListH(productCategory: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productCategory}`);
    if (!res.ok) return undefined
    const data = await res.json();
    return data.productCategory;
}
