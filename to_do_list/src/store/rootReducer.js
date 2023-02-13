import { combineReducers } from "redux";
import todos from "./slices/todos";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  todos,
  composeWithDevTools,
});
