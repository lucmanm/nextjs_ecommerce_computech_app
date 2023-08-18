export async function getProductCategory() {
    const res = await fetch("http://localhost:3000/api/category/");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.productCategories;
}

export async function getProductCategoryslug(categoryslug: string) {
    const res = await fetch(
        `http://localhost:3000/api/category/${categoryslug}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch categoryslug");
    }
    const data = await res.json();
    return data.productCategory;
}
