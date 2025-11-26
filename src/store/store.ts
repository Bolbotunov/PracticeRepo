import { combineReducers, createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { todoReducer } from "../reducers/todoReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
