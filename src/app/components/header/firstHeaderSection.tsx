import React from "react";
import Logo from "../../../../public/assets/desktop/logo.png";
import Image from "next/image";
import MobileLogo from "../../../../public/assets/mobile/mobileLogo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function FirstHeaderSection() {
  return (
    <div className="flex justify-between w-full items-center px-[6%] bg-white md:bg-[#32333E] py-[12px]">
      <Image src={Logo} alt="logo" className="md:hidden" />
      <Image src={MobileLogo} alt="logo " className="hidden md:block" />
      <div className="flex items-center gap-[20px]  md:hidden">
        <p className="text-[16px] font-medium text-[#32333E] cursor-pointer ">
          ბლოგი
        </p>
        <p className="text-[16px] font-light text-[#626264] cursor-pointer ">
          მედია
        </p>
        <p className="text-[16px] font-light text-[#626264] cursor-pointer ">
          კარიერა
        </p>
        <p className="text-[16px] font-light text-[#626264] cursor-pointer ">
          კონტაქტი
        </p>

        <div className="flex gap-[6px] items-center">
          <p className="text-[14px] text-[#626264] font-light cursor-pointer ">
            LIVE
          </p>
          <div className="w-[13px] h-[13px] border-[1px] border-[#ec8888] rounded-full flex justify-center items-center ">
            <div className="w-[7px] h-[7px] bg-[#F63B3B] rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <CiSearch className="absolute  right-4 top-2 " />
          <input className="w-[207px] h-[35px] border-[1px] borer-[#626264] rounded-[24px] px-[10px] pr-[35px]" />
        </div>

        <div className="flex  items-center gap-[5px]">
          <p className="text-[#656567] text-16px">ქარ</p>
          <IoIosArrowDown className="text-[#656567]" />
        </div>
      </div>
      <GiHamburgerMenu className="text-[48px] text-[white] hidden md:block" />
    </div>
  );
}
