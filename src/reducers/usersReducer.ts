import {
  FAILED_USER_ACTION,
  REQUEST_USER_ACTION,
  SUCCESS_USER_ACTION,
} from "../constants/constants";

export type UsersType = {
  id: number;
  name: string;
  email: string;
};

type UsersActionType = {
  type: string;
  payload: UsersType[];
};

type UsersStateType = {
  users: UsersType[];
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
  message: string;
};
const initialState = {
  users: [],
  isLoading: false,
  error: false,
  errorMessage: "",
  message: "idle",
};

export function usersReducer(
  state: UsersStateType = initialState,
  action: UsersActionType
) {
  switch (action.type) {
    case REQUEST_USER_ACTION:
      return { ...state, isLoading: true, message: "request start" };
    case SUCCESS_USER_ACTION:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        message: "request finish success",
      };
    case FAILED_USER_ACTION:
      return {
        ...state,
        isLoading: false,
        errorMessage: `FAILED WITH ERROR: ${action.payload}`,
        message: "request finish with ERROR!",
      };
    default:
      return state;
  }
}
