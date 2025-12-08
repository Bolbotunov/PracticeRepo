import {
  COUNTER_ACTION_MINUS,
  COUNTER_ACTION_PLUS,
} from "../constants/constants";

type counterActionType = {
  type: string;
};
const initialState = 0;

export function counterReducer(
  state: number = initialState,
  action: counterActionType
) {
  switch (action.type) {
    case COUNTER_ACTION_PLUS:
      return state + 1;
    case COUNTER_ACTION_MINUS:
      return state - 1;
    default:
      return state;
  }
}
