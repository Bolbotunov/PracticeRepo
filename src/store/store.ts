import createSagaMiddleware from "@redux-saga/core/dist/declarations/types";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import { sagaWatcher } from "./AppSaga";
import { persist } from "./persistConfig";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    translate: persist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagaWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
