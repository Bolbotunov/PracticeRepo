import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import translateSlice from "./translateSlice";

const persistConfig = {
  key: "persistKey",
  storage,
  whitelist: ["dairyList"],
};
export const persist = persistReducer(persistConfig, translateSlice);
