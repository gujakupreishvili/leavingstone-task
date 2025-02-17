"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { PiTagFill } from "react-icons/pi";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/app/store/reducers";

import "swiper/css";
import "swiper/css/pagination";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function PinInfo() {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const pinnedBlogs = blogs?.data?.filter((blog) => blog.isPinned) || [];

  return (
    <div className="w-full mt-[30px] relative">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={20}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        breakpoints={{
          964: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="w-full"
      >
        {pinnedBlogs.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-[#BECBCB] flex flex-col px-[24px] py-[12px] rounded-[4px] mb-[60px] md:flex-row md:justify-start md:px-[20px] md:gap-[30px]">
              <div className="w-full h-[300px] bg-yellow-300 mb-[10px] mt-[12px] md:w-[390px] md:h-[250px] sm:w-[150px] sm:h-[150px]"></div>
              <div className="flex flex-col gap-[10px] py-[12px] md:justify-between">
                <div className="flex flex-col">
                  <p className="text-[#979797]">
                    {new Date(item.createDate).toLocaleDateString("ka-GE")}
                  </p>
                  <h1 className="h-[72px] text-[16px] sm:text-[14px] text-black font-normal md:w-[219px] sm:w-[170px]">
                    {item.title}
                  </h1>
                </div>
                <div className="flex gap-[8px]">
                  <div className="w-[88px] h-[24px] bg-white rounded-[4px] flex items-center px-[4px] gap-[5px]">
                    <PiTagFill className="text-[#6D9696]" />
                    <p className="text-[10px] text-[#6D9696] font-light">
                      თემატიკა
                    </p>
                  </div>
                  <div className="w-[24px] h-[24px] bg-white rounded-[4px] flex justify-center items-center">
                    <MdOutlineStickyNote2 className="text-[#6D9696]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
