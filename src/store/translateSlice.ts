import { dictionary } from "@/constants/dictionary";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type StatusType = "idle" | "pending" | "success" | "failed";
type InitialStateType = {
  word: string;
  translation: string[];
  status: StatusType;
  isCorrect: null | boolean;
};

const initialState: InitialStateType = {
  word: "",
  translation: [],
  status: "idle",
  isCorrect: null,
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
        state.isCorrect = null;
      })
      .addCase(fetchWord.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { checkAnswer } = translateSlice.actions;
export default translateSlice.reducer;
