import { Dispatch } from "redux";
import axios, { AxiosError } from "axios";
import { axiosInstance } from "../lib/axiosInstance";


const CATEGORIES = "GET_CATEGORIES";
const CATEGORY_POSTS_BY_ID = "GET_CATEGORY_POSTS_BY_ID";

export interface Category {
  id: number;
  name: string;
  shareImage: string | null;
  shareTitle: string | null;
  shareDescription: string | null;
}

interface CategoriesResponse {
  data: Category[];
}

interface CategoryPosts {
  id: number;
  shareImage: null;
  translations: [];
}

interface CategoriesState {
  categories: Category[];
  categoryPosts: CategoryPosts | null; 
}

interface GetCategoriesAction {
  type: typeof CATEGORIES;
  payload: Category[];
}

interface GetCategoryPostsByIdAction {
  type: typeof CATEGORY_POSTS_BY_ID;
  payload: CategoryPosts;
}

type CategoryActions = GetCategoriesAction | GetCategoryPostsByIdAction;


const initialState: CategoriesState = {
  categories: [],
  categoryPosts: null,
};

export const getCategories =
  (skip: string, take: string) =>
  async (dispatch: Dispatch<GetCategoriesAction>) => {
    try {
      const response = await axiosInstance.get<CategoriesResponse>(
        `BlogCategories?skip=${skip}&take=${take}`,
        {
          headers: {
            "Accept-Language": "ka",
          },
        }
      );
      dispatch({
        type: CATEGORIES,
        payload: response.data.data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          (error as AxiosError).response?.status,
          "Something went wrong when getting categories"
        );
      } else {
        console.log(error);
      }
    }
  };

export const getCategoryPostsById =
  (id: string | undefined) =>
  async (dispatch: Dispatch<GetCategoryPostsByIdAction>) => {
    try {
      const response = await axiosInstance.get<CategoryPosts>(
        `BlogCategories/${id}`,
        {
          headers: {
            "Accept-Language": "ka",
          },
        }
      );
      console.log(response.data, "categoryPayload");
      dispatch({ type: CATEGORY_POSTS_BY_ID, payload: response.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          (error as AxiosError).response?.status,
          "Something went wrong when getting category posts by ID"
        );
      } else {
        console.log(error);
      }
    }
  };

const categoriesReducer = (
  state = initialState,
  action: CategoryActions
): CategoriesState => {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEGORY_POSTS_BY_ID:
      return {
        ...state,
        categoryPosts: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;