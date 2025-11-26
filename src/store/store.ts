import { combineReducers, createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { todoReducer } from "../reducers/todoReducer";
import { usersReducer } from "../reducers/usersReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer);
