import { createSlice } from "@reduxjs/toolkit";

type todoType = {
  id: number;
  text: string;
  complete: boolean;
};

type todosType = todoType[];

const initialState: todosType = [{ id: 1, text: "test", complete: false }];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state[state.length - 1].id ? state[state.length - 1].id + 1 : 1,
        text: action.payload,
        complete: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
