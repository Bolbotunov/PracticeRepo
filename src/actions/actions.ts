import {
  COUNTER_ACTION_DELAY_PLUS,
  COUNTER_ACTION_PLUS,
  FLAG_ACTION,
} from "../constants/constants";
import { AppDispatch } from "../store/store";

export const flagAction = (payload: Date) => {
  return { type: FLAG_ACTION, payload };
};

export const countActionPlus = () => {
  return { type: COUNTER_ACTION_PLUS };
};

export const countActionDelayPlus = () => (dispatch: AppDispatch) => {
  setTimeout(() => dispatch({ type: COUNTER_ACTION_DELAY_PLUS }), 1000);
};
