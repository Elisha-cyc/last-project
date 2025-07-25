import React from 'react'

export const Title = ({title,subTitle, align, font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
        <h1 className={`text-4xl md:text-6xl ${font || "font-playfair"}`}>{title}</h1> 
       <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-full'>{subTitle}</p>
    </div>
  )
}
export default Title