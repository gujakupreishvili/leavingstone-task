import React, { useEffect } from "react";
import FilterSection from "./filterSection";
import Info from "./info";
import { useDispatch } from "react-redux";
import { getBlogs } from "@/app/store/blogs";
import { AppDispatch } from "@/app/store/configureStore";
import { getAuthorsNames } from "@/app/store/authors";
import { getCategories } from "@/app/store/categories";
import BlogImg from "./blogImg";
import Pinsection from "./pinSection/pinSection";

const useAppDispatch: () => AppDispatch = useDispatch;

export default function Main() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBlogs("1", "10"));
    dispatch(getAuthorsNames("1", "10"));
    dispatch(getCategories("1", "10"));
  }, [dispatch]);
  return (
    <>
      <BlogImg />
      <Pinsection />
      <FilterSection />
      <Info />
    </>
  );
}
