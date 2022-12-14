import React,{FC} from 'react'

interface HeaderPropsInterface {
  category: any, 
  title: string, 
}
const Header: FC<HeaderPropsInterface> = ({category, title}) => {
  return (
    <div
      className='mb-10'
    >
      <p className='text-gray-400 dark:text-yellow-200'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-yellow-300'>
        {title}
      </p>
    </div>
  )
}

export default Header
