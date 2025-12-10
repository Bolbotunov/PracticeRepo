import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "./translateSlice";

export const store = configureStore({
  reducer: {
    translate: translateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
