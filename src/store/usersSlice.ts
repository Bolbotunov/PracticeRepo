import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_URL } from "../constants/constants";

type UserType = {
  name: string;
  email: string;
};
type InitialStateType = {
  users: UserType[];
  status: "idle" | "pending" | "success" | "failed";
};

const initialState: InitialStateType = {
  users: [],
  status: "idle",
};

export const fetchUsers = createAsyncThunk<UserType[]>(
  "users/fetchUsers",
  async () => {
    const res = await fetch(USER_URL);
    const data = await res.json();
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export {};
export default usersSlice.reducer;
