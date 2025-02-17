"use client"
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import ListAuthors from "./searchSection/listAuthors";
import {  useDispatch,  } from "react-redux";
import { getAuthorsPostById } from "@/app/store/authors";
import { RootState } from "@/app/store/reducers";
import ListCategories from "./searchSection/listCategories";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

// import { getCategoryPostsById } from "@/app/store/categories"; // Import the new action

export default function FilterSection() {
  const [showAuthors, setShowAuthors] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<{firstName: string; lastName: string;} | null>(null);
  const [authorId, setAuthorId] = useState<string>();

  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{id: string;name: string;} | null>(null);
  const [, setCategoryId] = useState<string>();

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleShowAuthors = () => {
    setShowAuthors(!showAuthors);
    setShowCategories(false);
  };

  const handleSelectAuthor = (
    id: string,
    firstName: string,
    lastName: string
  ) => {
    setAuthorId(id);
    setSelectedAuthor({ firstName, lastName });
    setShowAuthors(false);
  };

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
    setShowAuthors(false);
  };

  const handleSelectCategory = (id: string, name: string) => {
    setCategoryId(id);
    setSelectedCategory({ id, name });
    setShowCategories(false);
  };

  const getData = () => {
    if (authorId) {
      dispatch(getAuthorsPostById(authorId));
    }
  };

  return (
    <div className="flex flex-col px-[6%] w-full gap-[25px] mb-[50px] md:gap-[0px]">
      <div className="flex w-full justify-between gap-[1%] md:flex-col">
        <input
          type="text"
          placeholder="საძიებო სიტყვა"
          className="w-[40%] border-[1px] text-[#32333E] placeholder:text-[#32333E] border-[#D1D1D1] bg-[#E1E1E1] px-[12px] h-[50px] rounded-[4px] md:w-full md:mb-[10px]"
        />

        <div className="flex flex-col relative w-[40%] md:w-full">
          <div
            onClick={handleShowCategories}
            className="flex items-center justify-between border-[1px] border-[#D1D1D1] px-[12px] h-[50px] rounded-[4px] md:mb-[10px]"
          >
            <p>{selectedCategory ? selectedCategory.name : "თემატიკა"}</p>
            {showCategories ? (
              <MdOutlineKeyboardArrowUp className="text-[#6D9696]" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-[#6D9696]" />
            )}
          </div>
          {showCategories && (
            <ListCategories onSelectCategory={handleSelectCategory} />
          )}
        </div>

        <div className="flex flex-col relative w-[40%] md:w-full">
          <div
            onClick={handleShowAuthors}
            className="flex items-center justify-between border-[1px] border-[#D1D1D1] px-[12px] h-[50px] rounded-[4px] md:mb-[10px]"
          >
            <p>
              {selectedAuthor
                ? `${selectedAuthor.firstName} ${selectedAuthor.lastName}`
                : "ავტორი"}
            </p>
            {showAuthors ? (
              <MdOutlineKeyboardArrowUp className="text-[#6D9696]" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-[#6D9696]" />
            )}
          </div>
          {showAuthors && <ListAuthors onSelectAuthor={handleSelectAuthor} />}
        </div>
      </div>

      <div className="flex w-full justify-between gap-[1%] md:flex-col">
        <div className="flex items-center justify-between w-[40%] border-[1px] border-[#D1D1D1] px-[12px] h-[50px] rounded-[4px] md:w-full md:mb-[10px]">
          <p>თარიღი</p>
          <MdOutlineKeyboardArrowDown className="text-[#6D9696]" />
        </div>
        <div className="flex items-center justify-between w-[40%] border-[1px] border-[#D1D1D1] px-[12px] h-[50px] rounded-[4px] md:w-full md:mb-[10px]">
          <p>რედაქტორის რჩეული</p>
          <label className="relative flex items-center justify-center w-5 h-5 border-2 border-[#D1D1D1] rounded-md cursor-pointer">
        <input type="checkbox" className="peer hidden"/>
        <svg className="w-4 h-4 text-[#6D9696] opacity-0 peer-checked:opacity-100 transition-opacity duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M20.25 5.25a.75.75 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06l5.47 5.47L20.25 5.25Z" clipRule="evenodd" />
        </svg>
    </label>
        </div>
        <button
          onClick={getData}
          className="bg-[#6D9696] w-[40%] h-[50px] text-[16px] text-white font-normal rounded-[4px] md:w-full"
        >
          ძებნა
        </button>
      </div>
    </div>
  );
}
