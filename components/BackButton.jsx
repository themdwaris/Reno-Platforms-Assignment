
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const BackButton = ({destPath,classname,text="Back"}) => {
    const router = useRouter()
  return (
    <button
            className={`py-1.5 px-2.5 pl-1.5 font-semibold rounded-lg text-sm flex items-center gap-0.5 ${classname} cursor-pointer transition transform active:scale-90`}
            onClick={() => router.push(destPath)}
          >
            <span>
              <IoIosArrowBack size={18} />
            </span>
            <span>{text}</span>
          </button>
  )
}

export default BackButton
