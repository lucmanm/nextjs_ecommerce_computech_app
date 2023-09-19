export interface SliderProps {
    label: string;
    imageUrl: string;
}

export interface Product {
    id: string,
    description: string,
    price: string,
    model: string,
    salePrice: string,
    stock: number,
    images: Image[]
    brand: Brand
    categoryId: string
}

export interface Image {
    id: string,
    imageUrl: string,
}

export interface Brand {
    id: string
    brand: string
    imageUrl: string
}