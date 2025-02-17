import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
export type RootState = ReturnType<typeof rootReducer>;
const composedEnhancers = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, composedEnhancers);
export default store;
export type AppDispatch = typeof store.dispatch;