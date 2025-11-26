import { ActionTodoType, todoType } from "../types/types";

export function todoReducer(state: todoType[] = [], action: ActionTodoType) {
  switch (action.type) {
    case "addTask": {
      let newId = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, { id: newId, task: action.payload }];
    }
    case "deleteTask": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "editTask": {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.task }
          : item
      );
    }
    default:
      return state;
  }
}
