import { ATTEMPTS_COUNT } from "@/constants/constants";
import { dictionary } from "@/constants/dictionary";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchWord = createAsyncThunk("translate/fetchWord", async () => {
  const randomItem = dictionary[Math.floor(Math.random() * dictionary.length)];
  await new Promise((res) =>
    setTimeout(
      () => res({ randomWord: randomItem.en, translation: randomItem.ru }),
      1000
    )
  );

  return { randomWord: randomItem.en, translation: randomItem.ru };
});

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    checkAnswer: (state, action) => {
      state.isCorrect = state.translation.includes(action.payload);
    },
    saveToDiary: (state, action) => {
      state.dairyList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWord.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchWord.fulfilled, (state, action) => {
        state.status = "success";
        state.word = action.payload.randomWord;
        state.translation = action.payload.translation;
        if (state.attempts === ATTEMPTS_COUNT) {
          state.attempts = 0;
        } else {
          state.attempts++;
        }

        state.isCorrect = null;
      })
      .addCase(fetchWord.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { checkAnswer, saveToDiary } = translateSlice.actions;
export default translateSlice.reducer;
