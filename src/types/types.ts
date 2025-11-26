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

export type userData = {
  id: number;
  name: string;
  email: string;
};
type GetUsersRequest = { type: "getUsersRequest" };
type GetUsersSuccess = { type: "getUsersSuccess"; payload: userData[] };
type GetUsersFail = { type: "getUsersFail"; payload: string };

export type UsersAction = GetUsersRequest | GetUsersSuccess | GetUsersFail;
