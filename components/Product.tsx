import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <div className='rounded-lg overflow-hidden flex flex-col w-60 gap-3 p-2 dt:p-3 shadow-lg bg-white'>
      <div className='border border-black'>
        <Image 
        src="/aioimg.jpg" 
        width={500} 
        height={500} 
        alt="all in One Image"
        />
      </div>
      <div>
        <h3 className='border border-black text-sm tb:text-base line-clamp-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque sint cumque ab dolore blanditiis laborum neque magni debitis corporis quisquam nam, deleniti, ut animi repellendus nemo aperiam. Alias, sequi.</h3>
      </div>
      <div>
        <span>SR 0,000</span>
      </div>
      <div className='flex space-x-4'>
        <button className='border border-black'>ICON</button>
        <button className='border border-black'>ICON</button>
        <button className='border border-black'>ICON</button>
      </div>
    </div>
  )
}

export default Product