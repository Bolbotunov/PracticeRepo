type StateType = {
  count: number;
};

type ActionType = {
  type: string;
};

export function counterReducer(
  state: StateType = { count: 0 },
  action: ActionType
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
