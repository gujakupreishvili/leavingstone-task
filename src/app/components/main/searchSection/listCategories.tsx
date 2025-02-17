import { RootState } from "@/app/store/reducers";
import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ListCategoriesProps {
  onSelectCategory: (id: string, name: string) => void;
}

export default function ListCategories({ onSelectCategory }: ListCategoriesProps) {
  const categories = useAppSelector((state) => state.categories.categories);

  return (
    <div className="absolute w-[60%] bg-white top-[120%] md:top-[93%] rounded-[4px] right-0 flex flex-col justify-start items-start border-[1px] z-20 border-gray-300 max-h-[180px] overflow-y-auto">
      <hr className="h-[1px] w-full bg-gray-400" />
      {categories.length > 0 ? (
        categories.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className="flex gap-[12px] cursor-pointer px-[17px] py-[8px] hover:bg-gray-400 w-full transition-colors duration-500 group"
              onClick={() => onSelectCategory(item.id.toString(), item.name)}
            >
              <h2 className="transition-colors duration-300 group-hover:text-white">
                {item.name}
              </h2>
            </div>
            <hr className="h-[1px] w-full bg-gray-400" />
          </React.Fragment>
        ))
      ) : (
        <p className="text-center py-4 text-gray-500 px-[12px]">თემატიკა ცარიელია.</p>
      )}
    </div>
  );
}