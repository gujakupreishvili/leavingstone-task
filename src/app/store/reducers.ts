import { combineReducers } from "redux";
import authorsReducer from "./authors";
import blogReducer from "./blogs";
import categoriesReducer from "./categories";


const rootReducer = combineReducers({
  authors: authorsReducer,
  blogs: blogReducer,
  categories: categoriesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;