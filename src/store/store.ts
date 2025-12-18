import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

import { persist } from "./persistConfig";
import { rootSaga } from "./AppSaga";

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

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
