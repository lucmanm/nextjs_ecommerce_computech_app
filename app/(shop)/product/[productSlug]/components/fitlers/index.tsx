import React from "react";
import BrandFilter from "./brand";
import { cn } from "@/lib/utils";

type PorductsFilters = {
    className: string
}
const PorductsFilters: React.FC<PorductsFilters> = ({className}) => {
    return ( 
        <section className={cn("shadow rounded-md p-2 border bg-white", className)}>
            <BrandFilter/>
        </section>
     );
}
 
export default PorductsFilters;