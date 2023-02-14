import { combineReducers } from "redux";
import todos from "./slices/todosToolkit";

export const rootReducer = combineReducers({
  todos,
});
