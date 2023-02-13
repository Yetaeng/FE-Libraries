import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer);
console.log("getState:", store.getState());
