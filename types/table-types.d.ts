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
}

export interface Image {
    id: string,
    imageUrl: string,
}