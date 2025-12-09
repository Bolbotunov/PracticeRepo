import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    todoReducer: todoSlice,
    counterReducer: counterSlice,
    usersReducer: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
