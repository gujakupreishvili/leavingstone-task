import React from 'react'
import PinInfo from './pinInfo'

export default function Pinsection() {
  return (
    <div className='flex flex-col px-[6%] gap-[50px]'>
      <p className='pt-[40px] text-[18px] text-[#32333E] font-normal md:hidden'>
        აღნიშნულ ჩანართში წარმოდგენილი იქნება ბლოგის აღწერა,
         ეს ტექსტი არის შემთხვევით გენერირებული ტემთხვევით
          გენერირებული ტემთხვევით გენერირებული ტემთხვევით
           გენერირებული ტე ეს ტექსტი არის  ეს ტექსტი არის
            გენილი იქნებგენილი იქნებ გენერირებული ტელი
             იქნება ბლოლი იქნება ბლო
      </p>
      <div className='flex w-full md:pt-[20px] '>
        <button className='w-[50%] h-[54px] bg-[#6D9696] text-white font-normal' >ბლოგი</button>
        <button className='w-[50%] h-[54px] border-[1px] border-[#6D9696] text-[#32333E] text-[16px] font-normal'>პრეზიდენტის ბლოგი</button>
      </div>
      <PinInfo />
    </div>
  )
}
