import { combineReducers } from "redux";
import counter from "./slices/counter";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({ counter, composeWithDevTools });
