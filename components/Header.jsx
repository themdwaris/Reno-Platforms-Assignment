'use client'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full'>
        <div className='fixed top-0 w-full px-5 sm:px-10 md:px-16 lg:px-24 bg-gray-900 h-14 text-white flex items-center justify-between z-50'>
            <Link href="/" className='text-xl font-semibold'>Reno</Link>
            <button className='px-2 py-1 font-semibold rounded-md text-sm bg-green-800 cursor-pointer transition transform active:scale-90'>Get started</button>
        </div>
    </div>
  )
}

export default Header