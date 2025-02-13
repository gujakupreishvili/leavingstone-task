import React from 'react'

import { AiOutlinePrinter } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { ImFacebook2, ImLinkedin } from 'react-icons/im'
import { RiArrowRightSLine } from 'react-icons/ri'


export default function ThirdHeaderSection() {
  return (
    <div className=' flex w-full px-[6%] bg-white py-[18px]  justify-between items-center sm:bg-[#E1E1E1] sm:flex-col sm:items-start '>
      <div className='flex items-center gap-[22px]'>
      <FaHouse  className='text-[#32333E]'/>
      <div className='flex items-center'>
      <p className='text-[#B0B0B0]'>მთავარი</p> <span><RiArrowRightSLine className='text-[#B0B0B0]' /></span>
      <p className='text-[#B0B0B0]'>ბლოგი</p>
      </div>
      </div>
      <p className='hidden sm:block text-[28px] text-[#32333E] py-[15px] font-bold'>ეროვნული ბანკის ბლოგი</p>
      <div className='flex  items-center gap-[12px]'>
      <ImFacebook2 className='text-[18px] text-[#C1C2C5]' />
      <ImLinkedin  className='text-[18px] text-[#C1C2C5]' />
      <FaTwitterSquare  className='text-[22px] text-[#C1C2C5]' />
      <div className='w-[20px] h-[20px] bg-[#C1C2C5] flex items-center justify-center rounded-[2px] sm:hidden'>
      <AiOutlinePrinter className='text-white' />
      </div>
      </div>
      <p className='hidden sm:block pt-[18px] pb-[12px] text-[20px] font-normal text-[#32333E]' >აღნიშნულ ჩანართში წარმოდგენილი იქნება ბლოგის აღწერა, ეს ტექსტი არის შემთხვევით გენერირებული ტემთხვევით გენერირებული ტემთხვევით გენერირებული ტემთხვევით გენერ.</p>
      <div className='hidden sm:flex w-full items-center gap-[20px]'>
        <button className=' w-[55%] h-[66px] border-[2px] border-[#32333E] rounded-[6px] text-[18px] font-normal '>გამოიწერე ბლოგი</button>
        <button className='w-[55%] h-[66px] border-[2px] border-[#32333E] rounded-[6px] text-[18px] font-normal  '>გახდი სებ-ის ბლოგერი</button>
      </div>
    </div>
  )
}
