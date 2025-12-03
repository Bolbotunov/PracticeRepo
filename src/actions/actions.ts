import {
  COUNTER_ACTION_DELAY_PLUS,
  COUNTER_ACTION_PLUS,
  FAILED_USER_ACTION,
  FLAG_ACTION,
  REQUEST_USER_ACTION,
  SUCCESS_USER_ACTION,
} from "../constants/constants";
import { UsersType } from "../reducers/usersReducer";
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

export const getUsers = (payload: UsersType) => {
  return { type: SUCCESS_USER_ACTION, payload };
};

export function fetchUsers(USER_URL: string) {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: REQUEST_USER_ACTION });
    try {
      const res = await fetch(USER_URL);
      const data = await res.json();
      dispatch(getUsers(data));
    } catch (error) {
      dispatch({ type: FAILED_USER_ACTION, payload: error });
    }
  };
}
