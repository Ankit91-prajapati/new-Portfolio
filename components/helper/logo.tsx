import { CodeSquareIcon } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className=' flex items-center space-x-2'><div className='bg-sky-600 dark:bg-blue-300 w-10 h-10 rounded-lg flex items-center justify-center flex-row'>
        <CodeSquareIcon className='text-white w-6 h-6'/></div>
        <h1 className='sm:text-xl hidden sm:block md:text-2xl text-sky-800 dark:text-blue-300 rounded-md font-bold'>{"<DEV/>"}</h1>
        </div>
  )
}

export default Logo