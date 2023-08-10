type Products = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: [];
};


export interface ListProps {
    description: string;
    imgLink: string;
    url: string;
}
export interface ProductCategoryProps {
    title?: string;
    list: ListProps[];
}

export interface SliderProps {
    sliderhead?: string;
    list: ListProps[];
    subtitle?: boolean;
    sliderSlide?: string;
    sliderCustomerStyle?: string;
    arrow?: boolean;
}