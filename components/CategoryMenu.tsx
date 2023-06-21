import { categories } from '@/constant';
import { ProductCategoryProps } from '@/types';
import Link from 'next/link';
import React from 'react'

const CategoryMenu = () => {
    // const [{},{}] = categorieses;
  return (
    <>
     {/* Desktop Category Menu */}
     
      <div className="group relative z-20">
      
          <div >
            <div className="grow rounded-full bg-blue-900 px-4 py-2 text-center font-bold uppercase text-white hover:cursor-pointer shadow-md">
              <span>
              {categories[0].title}
              </span>
            </div>
            <div className="hidden group-hover:block group-focus:visible">
              <div className="absolute top-full flex w-full flex-col overflow-hidden rounded pt-3 shadow-md">
                {categories[0].list.map(({product, url})=>(
                    <Link
                    key={product}
                    href={url}
                    className="w-full border border-b-gray-300 bg-gray-200 px-2 py-3 font-medium text-gray-600 hover:bg-gray-100 hover:text-black">
                    {product}
                  </Link>
                ))}
              </div>
            </div>
          </div>
       
      </div>
    </>
  )
}

export default CategoryMenu