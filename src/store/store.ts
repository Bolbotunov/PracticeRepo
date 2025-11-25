import { createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";

export const AppStore = createStore(counterReducer);
