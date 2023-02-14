import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools,
});
console.log("getState:", store.getState());
