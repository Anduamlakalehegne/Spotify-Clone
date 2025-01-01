import React from 'react'
import { BiBox } from 'react-icons/bi'
import { IoIosSearch } from 'react-icons/io'

export default function SearchInput() {
  return (
    <div className='bg-foreground py-2.5 px-4 rounded-full flex justify-between text-2xl'>
        <div className='flex items-center gap-2'>
            <IoIosSearch />
            <input 
            placeholder='What do you want to play?'
            className='md:inline hidden  w-96 bg-transparent outline-none placeholder:text-[14px] text-[14px] font-semibold'
            />
            <div className='h-5 w-[1px] bg-white/30' />
            <BiBox />
        </div>
    </div>
  )
}
