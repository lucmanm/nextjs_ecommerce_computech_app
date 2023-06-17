import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({btnType, clickHandler}: CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={btnType || "button"}
    className=''
    onClick={clickHandler}
    >
      <span>
        Button
      </span>
    </button>
  )
}

export default CustomButton