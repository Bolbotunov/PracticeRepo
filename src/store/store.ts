import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { counterReducer } from "../reducers/counterReducer";
import { flagReducer } from "../reducers/flagReducer";
import { usersReducer } from "../reducers/usersReducer";

export const RootReducer = combineReducers({
  flagReducer,
  counterReducer,
  usersReducer,
});

export const store = createStore(
  RootReducer,
  undefined,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
