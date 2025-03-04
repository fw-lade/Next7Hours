import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="px-25 py-4 bg-gray-200 flex justify-between items-center">
            <h1 className='text-gray-900 text-2xl font-extrabold'>LOGO</h1>
            <div className='flex items-center gap-4'>
              <Link className='text-gray-900 text-sm font-bold' href='/'>HOME</Link>
              <Link className='text-gray-900 text-sm font-bold' href='/about'>ABOUT</Link>
              <Link className='text-gray-900 text-sm font-bold' href='/products'>PRODUCTS</Link>
              <Link className='text-gray-900 text-sm font-bold' href='/docs'>DOCS</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar