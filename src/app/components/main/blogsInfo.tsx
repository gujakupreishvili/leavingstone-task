import { RootState } from "@/app/store/reducers";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { PiTagFill } from "react-icons/pi";
import { HashLoader } from "react-spinners";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface BlogsProps {
  onPinClick: (id: number, isPinned: boolean) => void;
}

export default function Blogs({ onPinClick }: BlogsProps) {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const loading = useAppSelector((state) => state.blogs.loading); 

  if (loading) {
    return <div className="text-center absolute left-[50%]   py-4"><HashLoader size={50}  color="#6D9696"/></div>; 
  }

  return (
    <div className="w-full flex flex-wrap gap-[12px]">
      {blogs && blogs.data.map((item, index) => (
        <div key={index} className="w-[32%] py-[16px] px-[24px] md:w-full">
          <div className="w-full h-[300px] rounded-[5px] object-cover bg-yellow-300"></div>
          <div className="flex flex-col gap-[12px] mt-[17px]">
            <p className="text-[#979797]">
              {new Date(item.createDate).toLocaleDateString("ka-GE")}
            </p>
            <p className="h-[72px] text-[#32333E] text-[16px] font-light">
              {item.title}
            </p>
            <div className="flex gap-[8px]">
              <div
                className="w-[88px] h-[24px] bg-white rounded-[4px] flex items-center px-[4px] gap-[5px] cursor-pointer"
                onClick={() => onPinClick(item.id, item.isPinned)}
              >
                <PiTagFill
                  className={item.isPinned ? "text-[#6D9696]" : "text-[rgba(160,160,160,0.5)]"}
                />
                <p className={`text-[10px] ${item.isPinned ? "text-[#6D9696]" : "text-[#979797]"} font-light`}>
                  თემატიკა
                </p>
              </div>
              <div className="w-[24px] h-[24px] bg-white rounded-[4px] flex justify-center items-center">
                <MdOutlineStickyNote2
                  className={item.isPinned ? "text-[#6D9696]" : "text-[rgba(160,160,160,0.5)]"}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}