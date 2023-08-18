import Link from "next/link";

interface CategoryProps {
    id: number;
    name: string;
}
interface DropdownMenuProps {
    title: string;
    productCategories: CategoryProps[];
}

const DropdownMenu = async ({
    title,
    productCategories,
}: DropdownMenuProps) => {
    return (
        <>
            {/* Desktop Category Menu */}

            <div className="group relative z-20">
                <div>
                    <div className="grow rounded-full bg-gray-100 px-4 py-1.5 text-center font-bold uppercase text-blue-950 shadow hover:cursor-pointer hover:bg-blue-950 hover:text-white">
                        <span>{title}</span>
                    </div>
                    <div className="hidden group-hover:block group-focus:visible">
                        <div className="absolute top-full flex w-fit flex-col overflow-hidden rounded pt-3 shadow-md">
                            {productCategories?.map(
                                ({ id, name }: CategoryProps) => (
                                    <Link
                                        key={id}
                                        href={`${id}`}
                                        className="white w-full whitespace-pre border border-b-gray-300 bg-gray-200 px-2 py-2 font-medium text-gray-600 hover:bg-gray-100 hover:text-black">
                                        <span className="capitalize">
                                            {name}
                                        </span>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropdownMenu;
