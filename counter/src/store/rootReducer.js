import { combineReducers } from "redux";
import counter from './slices/counterToolkit';
// import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({ counter });
