import React from 'react'
import {TopNavigation} from '@/components/header'
import {CustomButton} from '@/components'

const Header = () => {
  return (
    <header>
        <TopNavigation/>
        <CustomButton btnType="button"/>
    </header>
  )
}

export default Header