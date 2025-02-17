"use client";
import { RootState } from "@/app/store/reducers";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { updatePinnedStatus } from "@/app/store/blogs";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Blogs from "./blogsInfo";
import Author from "./authorsInfo";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function Info() {
  const blogs = useAppSelector((state) => state.blogs.blogs);
  const authorsBlogs = useAppSelector((state) => state.authors.authorsData);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handlePinClick = (id: number, isPinned: boolean) => {
    const pinnedBlogs = blogs?.data?.filter((blog) => blog.isPinned) || [];

    if (isPinned) {
      dispatch(updatePinnedStatus(id, false));
      return;
    }

    if (pinnedBlogs.length >= 3) {
      const oldestPinnedBlog = pinnedBlogs.reduce((oldest, blog) =>
        new Date(blog.createDate) < new Date(oldest.createDate) ? blog : oldest
      );
      dispatch(updatePinnedStatus(oldestPinnedBlog.id, false));
    }

    dispatch(updatePinnedStatus(id, true));
  };

  const renderContent = () => {
    if (authorsBlogs) {
      return <Author />;
    }
    return <Blogs onPinClick={handlePinClick} />;
  };

  return <div className="w-full px-[6%]">{renderContent()}</div>;
}
