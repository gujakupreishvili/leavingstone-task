import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { axiosInstance } from "../lib/axiosInstance";



const AUTHOR_NAME = "AUTHOR_NAME";
const AUTHOR_POSTS_BY_ID = "AUTHOR_POSTS_BY_ID";

type translations = {
  description: string;
  firstName: string;
  id: number;
  lastName: string;
  languageCode: string;
  shareDescription: string;
  shareTitle:  null;
  slug: string;
};

export interface Author {
  email: string;
  image: string;
  shareImage: string;
  translations: translations[];
}

export type AuthorNames = {
  description: string;
  email: string;
  firstName: string;
  id: number;
  image: string;
  lastName: string;
  shareImage: string;
  slug: string;
};

interface AuthorsResponse {
  data: AuthorNames[];
}


interface AuthorsState {
  authorsData: Author | null;
  authorsNames: AuthorNames[] | null; 
}


interface GetPostsAction {
  type: typeof AUTHOR_NAME;
  payload: AuthorNames[]; 
}

interface GetPostsByIdAction {
  type: typeof AUTHOR_POSTS_BY_ID;
  payload: Author;
}

type AuthorActions = GetPostsAction | GetPostsByIdAction;

const initialState: AuthorsState = {
  authorsNames: null,
  authorsData: null,
};

export const getAuthorsNames =
  (skip: string, take: string) => async (dispatch: Dispatch<AuthorActions>) => {
    try {
      const response = await axiosInstance.get<AuthorsResponse>(
        `BlogAuthors?skip=${skip}&take=${take}`,
        {
          headers: {
            "Accept-Language": "ka",
          },
        }
      );

      dispatch({
        type: AUTHOR_NAME,
        payload: response.data.data,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          (error as AxiosError).response?.status,
          "Something went wrong when getting author blogs"
        );
      } else {
        console.log(error);
      }
    }
  };

export const getAuthorsPostById =
  (id: string | undefined) => async (dispatch: Dispatch<AuthorActions>) => {
    try {
      const response = await axiosInstance.get<Author>(
        `BlogAuthors/${id}`,
        {
          headers: {
            "Accept-Language": "ka",
          },
        }
      );
      dispatch({ type: AUTHOR_POSTS_BY_ID, payload: response.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          (error as AxiosError).response?.status,
          "Something went wrong when getting author by ID"
        );
      } else {
        console.log(error);
      }
    }
  };


const authorsReducer = (
  state = initialState,
  action: AuthorActions
): AuthorsState => {
  switch (action.type) {
    case AUTHOR_NAME:
      return {
        ...state,
        authorsNames: action.payload, 
      };
    case AUTHOR_POSTS_BY_ID:
      return {
        ...state,
        authorsData: action.payload, 
      };

    default:
      return state;
  }
};

export default authorsReducer;
