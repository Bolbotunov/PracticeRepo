import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, text: "first task" }];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: 2, text: action.payload });
    },
  },
});

export default todoSlice.reducer;
