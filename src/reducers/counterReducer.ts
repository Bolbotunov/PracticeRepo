import { CounterAction, CounterState } from "../types/types";

export function counterReducer(
  state: CounterState = { count: 0 },
  action: CounterAction
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
