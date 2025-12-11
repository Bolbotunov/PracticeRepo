import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { counterReducer } from "../reducers/counterReducer";
import { todoReducer } from "../reducers/todoReducer";
import { usersReducer } from "../reducers/usersReducer";
import { UsersState } from "../types/types";

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  console.log("previous state", store.getState());
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

const checkTypeOfActionMiddleware =
  (store: any) => (next: any) => (action: any) => {
    let result;
    if (action.type === "decrement") {
      result = setTimeout(() => next(action), 1000);
      return result;
    }
    return next(action);
  };

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(loggerMiddleware, checkTypeOfActionMiddleware, thunk)
  )
);
