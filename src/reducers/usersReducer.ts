import { userData, UsersAction } from "../types/types";

export function usersReducer(state: userData[] = [], action: UsersAction) {
  switch (action.type) {
    case "getUsersRequest": {
      return state;
    }
    case "getUsersSuccess": {
      return action.payload;
    }
    case "getUsersFail": {
      return state;
    }

    default:
      return state;
  }
}
