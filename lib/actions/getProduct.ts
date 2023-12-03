import { Product } from "@/types/table-types";

// Display single products
export async function getProduct(productModel: string): Promise<Product>  {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${productModel}`);
    if (!res.ok) throw new Error("FAILED_TO_FETCH_PRODUCT_MODEL");
    const data = await res.json();
    return data.productData;
}

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
    if (!res.ok) {
        throw new Error("FAILED_TO_FETCH_PRODUCT_PRODUCTS");
    }
    const data = await res.json();
    return data.products;
}
// product function getting product by Category
export async function getProductListH(productCategory: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productCategory}`);
    if (!res.ok) return undefined
    const data = await res.json();
    return data.productCategory;
}
