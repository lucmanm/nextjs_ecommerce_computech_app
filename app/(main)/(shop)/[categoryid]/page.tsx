import CardProduct from "@/components/CardProduct";
const getProductCategories = async (categoryid: string) => {
    const res = await fetch(`http://localhost:3000/api/category/${categoryid}`);
    if (!res.ok) {
        throw new Error("Failed to category data");
    }
    const data = await res.json();
    return data.productCategory;
};
const CategoryPage = async ({ params }: { params: { categoryid: string } }) => {
    const categoryid = params.categoryid;

    return (
        <div>
            <CardProduct categoryId={categoryid} />
        </div>
    );
};

export default CategoryPage;
