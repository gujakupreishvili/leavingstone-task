"use client";
import { Provider } from "react-redux";
import Header from "./components/header";
import Main from "./components/main";
import store from "./store/configureStore";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}
