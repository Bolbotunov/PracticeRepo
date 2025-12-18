import { ATTEMPTS_COUNT } from "@/constants/constants";
import { createSlice } from "@reduxjs/toolkit";

type StatusType = "idle" | "pending" | "success" | "failed";

type diaryItem = {
  en: string;
  ru: string;
};

type InitialStateType = {
  word: string;
  translation: string[];
  status: StatusType;
  isCorrect: null | boolean;
  dairyList: diaryItem[];
  attempts: number;
};

const initialState: InitialStateType = {
  word: "",
  translation: [],
  status: "idle",
  isCorrect: null,
  dairyList: [],
  attempts: 0,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    fetchWordRequest: (state) => {
      state.status = "pending";
    },
    fetchWordSuccess: (state, action) => {
      state.status = "success";
      state.word = action.payload.word;
      state.translation = action.payload.translation;
      if (state.attempts === ATTEMPTS_COUNT) {
        state.attempts = ATTEMPTS_COUNT;
      } else {
        state.attempts++;
      }
      state.isCorrect = null;
    },
    fetchWordFail: (state) => {
      state.status = "failed";
    },
    checkAnswer: (state, action) => {
      state.isCorrect = state.translation.includes(action.payload);
    },
    saveToDiary: (state, action) => {
      state.dairyList.push(action.payload);
    },
    resetProgress: (state) => {
      state.attempts = 0;
      state.isCorrect = null;
      state.word = "";
      state.translation = [];
      state.status = "idle";
    },
  },
});

export const {
  fetchWordRequest,
  fetchWordSuccess,
  fetchWordFail,
  checkAnswer,
  saveToDiary,
  resetProgress,
} = translateSlice.actions;
export default translateSlice.reducer;
