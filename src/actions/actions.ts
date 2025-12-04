import {
  COUNTER_ACTION_DELAY_PLUS,
  COUNTER_ACTION_MINUS,
  COUNTER_ACTION_PLUS,
  COUNTER_ACTION_SAGA_DELAY_MINUS,
  COUNTER_ACTION_SAGA_DELAY_PLUS,
  FAILED_USER_ACTION,
  FETCH_USERS_SAGA_ACTION,
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

export const countActionMinus = () => {
  return { type: COUNTER_ACTION_MINUS };
};

export const countSagaActionDelayPlus = () => {
  return {
    type: COUNTER_ACTION_SAGA_DELAY_PLUS,
  };
};

export const countSagaActionDelayMinus = () => {
  return {
    type: COUNTER_ACTION_SAGA_DELAY_MINUS,
  };
};

export const fetchUsersSagaAction = () => {
  return {
    type: FETCH_USERS_SAGA_ACTION,
  };
};

export const requestUser = () => {
  return { type: REQUEST_USER_ACTION };
};

export const succesRequestUser = (users: UsersType) => {
  return { type: SUCCESS_USER_ACTION, payload: users };
};
export const failedRequestUser = (error: any) => {
  return { type: FAILED_USER_ACTION, payload: error };
};
