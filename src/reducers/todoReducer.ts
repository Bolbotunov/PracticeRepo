type todoType = {
  id: number;
  task: string;
};

type todoReducerAction = {
  type: string;
  payload: number;
};

export function todoReducer(state: todoType[] = [], action: todoReducerAction) {
  switch (action.type) {
    case "addTask": {
      let newId = state.length ? state[state.length - 1].id + 1 : 1;
      return [...state, { id: newId, task: action.payload }];
    }
    case "deleteTask": {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
}
