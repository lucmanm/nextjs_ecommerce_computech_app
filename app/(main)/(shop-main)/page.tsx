import Slider  from "@/components/Slider";
import ProductCategory from "@/components/ProductCategory";
import CarouselSlider from "@/components/CarouselSlider";
import { categories } from "@/lib/constant";
import React from "react";
import { getSliders } from "@/lib/actions/getSliders";


export const revalidate = 0

export default async function ShopPage() {
    const slider = await getSliders()
    // Destrcucturing Product categories & Brand List
    
    const [
        { title: productTitle, list: productList },
        { title: brandTitle, list: brandList },
    ] = categories;

    return (
        <main className="flex flex-col overflow-hidden">
            <section className="ml-4 mt-8 flex flex-col gap-y-8">
                {/* Main Slider of homepage */}
                <CarouselSlider sliderData={slider}/>

                {/* all Product Type  Data  - import Slider Components  */}
                <Slider
                    subtitle={true} //Enable and Disable below secription
                    list={productList}
                    sliderCustomerStyle="rounded-full w-20 h-20 dt:w-28 dt:h-28" //Csutom style for slider
                />

                {/* Category of products display */}
                <ProductCategory />

                {/* Brand Data - import Slider Components */}
                <Slider
                    subtitle={false} //Enable and Disable below secription
                    sliderhead={brandTitle} //Title or description
                    list={brandList} //Array output in descriptions
                    sliderCustomerStyle="rounded-lg w-24 h-24 dt:w-28 dt:h-28" //Csutom style for slider
                    arrow={true}
                />
            </section>
        </main>
    );
}
