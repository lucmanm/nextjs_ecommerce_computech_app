export async function getProductCategory() {
    const res = await fetch("http://localhost:3000/api/category");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.productCategory;
}
