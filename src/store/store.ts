import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { counterReducer } from "../reducers/counterReducer";
import { flagReducer } from "../reducers/flagReducer";

export const RootReducer = combineReducers({ flagReducer, counterReducer });

export const store = createStore(
  RootReducer,
  undefined,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
