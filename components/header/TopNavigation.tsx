import { TopNavigationProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const TopNavigation = ({title, url}: TopNavigationProps) => {
  return (
    <div className='relative dt:container flex flex-wrap justify-between'>
        <div className="flex">
          <div className="p-2 border flex font-medium gap-x-1">
              <Image src="profile.svg" width={18} height={18} alt="user icon"/>
              <span>Sign In</span>
          </div>
          <div className="p-2">Wishlist</div>
          <div className="p-2">Track</div>
        </div>
        <div className="p-2">Language</div>
    </div>
  )
}

export default TopNavigation