import React, { FC, PropsWithChildren } from 'react'

interface Props{
  bgColor: any, 
  color: any, 
  size?: any, 
  text: any,
  borderRadius: any;  
}

const Button:FC<Props> = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <button
      type='button' 
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{backgroundColor: bgColor, color, borderRadius}}
    >
      {text}
    </button>
  )
}



export default Button
