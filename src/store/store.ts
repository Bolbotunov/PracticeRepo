import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    todoReducer: todoSlice,
    counterReducer: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;