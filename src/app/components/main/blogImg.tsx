import React from 'react'
import desktopRoom from "../../../../public/assets/desktop/desktoproom.png"
import mobileRoom from "../../../../public/assets/mobile/mobileroom.png"
import Image from 'next/image'


export default function BlogImg() {
  return (
    <div className='relative'>
      <Image src={desktopRoom} alt="room"  className='md:hidden'/>
      <Image src = {mobileRoom} alt = "room"  className='hidden md:block w-full'/>
      <div className='w-[550px] h-[200px] absolute bottom-[10%] left-[4%] opacity-[0.8] bg-[#32333ECC] md:hidden'>
        <div className='flex flex-col px-[12px] justify-between  gap-[20px] py-[20px]'>
        <p className='text-[white] text-[37px] font-bold  text-center'>
        ეროვნული ბანკის ბლოგი
        </p>
        <div className='flex justify-center items-center gap-[10%]'>
          <button className='w-[40%] border-[1px] border-[#6D9696] rounded-[8px] h-[50px] text-[#6D9696] text-[16px] font-normal'>გამოიწერე ბლოგი</button>
          <button  className='w-[40%] border-[1px] border-white rounded-[8px] h-[50px] text-white text-[16px] font-normal'>გახდი სებ-ის ბლოგერი</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}
