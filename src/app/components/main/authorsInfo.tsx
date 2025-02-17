import { RootState } from "@/app/store/reducers";
import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default function Author() {
  const authorsBlogs = useAppSelector((state) => state.authors.authorsData);
  return (
    <div className="w-full flex flex-wrap gap-[24px]">
      {authorsBlogs &&
        authorsBlogs.translations.slice(0, 1).map((author, index) => (
          <div key={index} className="w-[32%] py-[16px] px-[24px] md:w-full">
            <div className="w-full h-[300px] bg-yellow-300 rounded-[5px] object-cover"></div>
            <div className="flex flex-col gap-[12px] mt-[17px]">
              <h2 className="text-lg font-medium">
                {author.firstName} {author.lastName}
              </h2>
              <p className="text-sm text-gray-600">{author.description}</p>
              <p className="text-sm text-gray-500">{authorsBlogs.email}</p>
              <p>{author.shareTitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
