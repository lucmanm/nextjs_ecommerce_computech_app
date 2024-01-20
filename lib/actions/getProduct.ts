import { Product } from "@/types/table-types";

// Display single products
export async function getProduct(productModel: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${productModel}`);
    if (!res.ok) throw new Error("FAILED_TO_FETCH_PRODUCT_MODEL");
    const data = await res.json();
    return data.productData;
}

// product function getting All products
export async function getProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
    if (!res.ok) {
        throw new Error("FAILED_TO_FETCH_PRODUCT_PRODUCTS");
    }
    const data = await res.json();
    return data.products;
}

// get Products by Brand and Category also filters
// export async function getProductType(productBySlug: string) {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productBySlug}`);
//     if (!res.ok) {
//         throw new Error("FAILED_FETCH_PRODUCT_BRAND");
//     }
//     const data = await res.json();
//     return data.productData
// }

export async function getProductType({ brand, productSlug }:
    {
        brand: string 
        productSlug: string
    }
) {
  
// console.log(productSlug, brand);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productSlug}?brand=${brand}`);
        if (!res.ok) { throw new Error("FAILED_FILTER_PRODUCTS") }
        const data = await res.json();
        return data.productData;
   

}



// product function getting product by Category
export async function getProductListH(productByCategory: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${productByCategory}`);
    if (!res.ok) {
        throw new Error("FAILED_TO_FETCH_PRODUCTS_BY_CATEGORY");
    }
    const data = await res.json();
    return data.productData;
}

