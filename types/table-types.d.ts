export interface SliderProps {
    label: string;
    imageUrl: string;
}

export interface ProductProps {
    id: string,
    description: string,
    price: string,
    model: string,
    salePrice: string,
    stock: number,
    brandId: string,
    categoryId: string,
    taxValue: string,
    isLive: boolean,
    isFeatured: boolean
}

