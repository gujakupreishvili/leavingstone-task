import { RootState } from "@/app/store/reducers";
import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ListAuthorsProps {
  onSelectAuthor: (id: string, firstName: string, lastName: string) => void;
}

export default function ListAuthors({ onSelectAuthor }: ListAuthorsProps) {
  const authors = useAppSelector((state) => state.authors.authorsNames);

  return (
    <div className="absolute w-[75%] bg-white top-[120%] md:top-[90%] md:w-[63%] rounded-[4px] right-0 flex flex-col justify-start items-start border-[1px] border-gray-300 max-h-[180px] overflow-y-auto z-20">
      <hr className="h-[2px] w-full bg-gray-400" />
      {authors ? (
        authors.length > 0 ? (
          authors.map((item, index: number) => (
            <React.Fragment key={index}>
              <div
                className="flex gap-[12px] cursor-pointer px-[17px] py-[8px] hover:bg-gray-400 w-full transition-colors duration-500 group"
                onClick={() =>
                  onSelectAuthor(
                    item.id.toString(),
                    item.firstName,
                    item.lastName
                  )
                }
              >
                <h2 className="w-[60px] text-center transition-colors duration-300 group-hover:text-white">
                  {item.firstName}
                </h2>
                <h2 className="transition-colors duration-300 group-hover:text-white w-[40%]">
                  {item.lastName}
                </h2>
              </div>
              <hr className="h-[2px] w-full bg-gray-400" />
            </React.Fragment>
          ))
        ) : (
          <p className="text-center py-4 text-gray-500 px-[12px]">
            ავტორი ცარიელია
          </p>
        )
      ) : (
        <p className="text-center py-4 text-gray-500 px-[12px]">
          ავტორი ცარიელია
        </p>
      )}
    </div>
  );
}
