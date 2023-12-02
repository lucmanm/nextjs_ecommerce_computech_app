export async function getProductType(productType: string) {

    const res = await fetch(`http://localhost:3000/api/${productType}`);
    if (!res.ok) {
        throw new Error("FAILED_FETCH_PRODUCT_TYPE");
    }
    const data = await res.json();
    return data.products
}
