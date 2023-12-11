export async function getSearchProducts(encodedSearchQuery: string | undefined) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?q=${encodedSearchQuery}`);
    
    if (!res.ok) {
        throw new Error("FAILED TO FETCH SEARCH");
    }
    const data = await res.json();
    return data.products;
}