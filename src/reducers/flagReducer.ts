import { FLAG_ACTION } from "../constants/constants";

type FlagToggleActionType = {
  type: string;
  payload: number;
};

type FlagToggleStateType = {
  statusFlag: boolean;
  date: number;
};

const initialState = {
  statusFlag: false,
  date: Date.now(),
};

export function flagReducer(
  state: FlagToggleStateType = initialState,
  action: FlagToggleActionType
) {
  switch (action.type) {
    case FLAG_ACTION:
      return { ...state, statusFlag: !state.statusFlag, date: Date.now() };
    default:
      return state;
  }
}
