type AddTaskAction = {
  type: "addTask";
  payload: string;
};

type DeleteTaskAction = {
  type: "deleteTask";
  payload: number;
};

export type todoType = {
  id: number;
  task: string;
};

type EditTaskAction = {
  type: "editTask";
  payload: todoType;
};

export type ActionTodoType = AddTaskAction | DeleteTaskAction | EditTaskAction;

export type CounterAction = {
  type: "increment" | "decrement";
};

export type CounterState = {
  count: number;
};

export type UsersState = {
  users: userData[] | [];
  isLoading: boolean;
  error: string | null;
};

export type userData = {
  id: number;
  name: string;
  email: string;
};

type GetUsersRequest = { type: "userRequest" };
type GetUsersSuccess = { type: "successRequest"; payload: userData[] };
type GetUsersFail = { type: "rejectRequest"; payload: string };

export type UsersAction = GetUsersRequest | GetUsersSuccess | GetUsersFail;
