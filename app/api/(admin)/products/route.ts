export default async function getAllProducts() {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Failed to Fetch Data");
    return res.json;
}
