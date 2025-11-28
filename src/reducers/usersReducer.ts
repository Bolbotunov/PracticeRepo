import { userData, UsersAction, UsersState } from "../types/types";

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

export function usersReducer(
  state: UsersState = initialState,
  action: UsersAction
) {
  switch (action.type) {
    case "userRequest": {
      return { ...state, isLoading: true, error: null };
    }
    case "successRequest": {
      return { ...state, isLoading: false, users: action.payload };
    }
    case "rejectRequest": {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}
