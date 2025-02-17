import axios, { AxiosError } from "axios";
import { axiosInstance } from "../lib/axiosInstance";
import { Dispatch } from "redux";

const GET_BLOGS = "get_blogs";
const UPDATE_PINNED_STATUS = "update_pinned_status";
const FILTER_BLOGS = "filter_blogs";
const SET_LOADING = "set_loading";

interface Blog {
  allowComments: boolean;
  blogAuthors: { id: number; name: string }[];
  blogCategories: { id: number; name: string }[];
  coverImage: string;
  createDate: string;
  description: string;
  files: null | string[];
  id: number;
  image: string;
  isFavourite: boolean;
  isPinned: boolean;
  languageSlugs: { slug: string; language: string }[];
  shareImage: string;
  slug: string;
  title: string;
  views: number;
}

interface BlogResponse {
  data: Blog[];
}

interface BlogState {
  blogs: BlogResponse | null;
  loading: boolean;
}

interface GetBlogsAction {
  type: typeof GET_BLOGS;
  payload: BlogResponse;
}

interface FilterBlogsByAuthorAction {
  type: typeof FILTER_BLOGS;
  payload: BlogResponse;
}

interface UpdatePinnedStatusAction {
  type: typeof UPDATE_PINNED_STATUS;
  payload: { id: number; isPinned: boolean };
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

type BlogActionTypes =
  | GetBlogsAction
  | UpdatePinnedStatusAction
  | FilterBlogsByAuthorAction
  | SetLoadingAction;

const initialState: BlogState = {
  blogs: null,
  loading: false,
};

export const getBlogs =
  (skip: string, take: string) =>
  async (dispatch: Dispatch<BlogActionTypes>) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axiosInstance.get<BlogResponse>(
        `Blog?skip=${skip}&take=${take}`,
        {
          headers: {
            "Accept-Language": "ka",
          },
        }
      );
      dispatch({ type: GET_BLOGS, payload: response.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          (error as AxiosError).response?.status,
          "something went wrong when getting blogs"
        );
      } else {
        console.log(error);
      }
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

export const updatePinnedStatus =
  (id: number, isPinned: boolean) =>
  async (dispatch: Dispatch<BlogActionTypes>) => {
    try {
      await axiosInstance.put(
        `Blog/${id}/isPinned?isPinned=${isPinned}`,
        {},
        {
          headers: {
            "Accept-Language": "ka",
          },
        }
      );
      dispatch({
        type: UPDATE_PINNED_STATUS,
        payload: { id, isPinned },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          (error as AxiosError).response?.status,
          "something went wrong when updating pinned status"
        );
      } else {
        console.log(error);
      }
    }
  };

export const filter =
  (id: string) => async (dispatch: Dispatch<BlogActionTypes>) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axiosInstance.get<BlogResponse>(
        `BlogAuthors?authorId=${id}`,
        {
          headers: {
            "Accept-Language": "ka",
          },
        }
      );
      dispatch({ type: FILTER_BLOGS, payload: response.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          (error as AxiosError).response?.status,
          "something went wrong when updating pinned status"
        );
      } else {
        console.log(error);
      }
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

// Reducer
export default function blogReducer(
  state = initialState,
  action: BlogActionTypes
): BlogState {
  switch (action.type) {
    case GET_BLOGS:
      return { ...state, blogs: action.payload };

    case UPDATE_PINNED_STATUS:
      if (state.blogs) {
        const updatedBlogs = state.blogs.data.map((blog) =>
          blog.id === action.payload.id
            ? { ...blog, isPinned: action.payload.isPinned }
            : blog
        );
        return {
          ...state,
          blogs: {
            ...state.blogs,
            data: updatedBlogs,
          },
        };
      }
      return state;

    case FILTER_BLOGS:
      return { ...state, blogs: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
