import createSagaMiddleware from "redux-saga";
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
import { counterWatcher } from "../sagas/counterSaga";
import { usersWatcher } from "../sagas/usersSaga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();
export const RootReducer = combineReducers({
  flagReducer,
  counterReducer,
  usersReducer,
});

export const store = createStore(
  RootReducer,
  undefined,
  applyMiddleware(thunk, sagaMiddleware)
);

export function* rootSaga() {
  yield all([counterWatcher(), usersWatcher()]);
}

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
