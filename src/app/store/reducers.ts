import { combineReducers } from "redux";
import BlogReducer from "./blogs";
import authorsReducer from "./authors";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
  authors: authorsReducer,
  blogs: BlogReducer,
  categories: categoriesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
