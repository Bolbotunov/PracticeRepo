import { dictionary } from "@/constants/dictionary";
import { SagaIterator } from "redux-saga";
import { takeEvery, delay, call, put, all, select } from "redux-saga/effects";
import {
  checkAnswer,
  fetchWordFail,
  fetchWordRequest,
  fetchWordSuccess,
  saveToDiary,
} from "./translateSlice";

function getRandomWord() {
  const randomItem = dictionary[Math.floor(Math.random() * dictionary.length)];
  return { word: randomItem.en, translation: randomItem.ru };
}

function* sagaWordWorker(): SagaIterator {
  try {
    yield delay(1000);
    const data = yield call(getRandomWord);
    yield put(fetchWordSuccess(data));
  } catch (error) {
    yield put(fetchWordFail());
  }
}

function* sagaCheckWorker(action: any): SagaIterator {
  const { translation, attempts, word, dairyList } = yield select(
    (state) => state.translate
  );
  const answer = action.payload;
  const isCorrect = translation.includes(answer);
  const alreadyInDiary = dairyList.some(
    (item: any) => item.en === word && item.ru === answer
  );
  if (isCorrect && !alreadyInDiary) {
    yield put(saveToDiary({ en: word, ru: answer }));
    if (attempts < 3) {
      yield put(fetchWordRequest());
    }
  }
}

export function* rootSaga() {
  yield all([
    takeEvery(fetchWordRequest.type, sagaWordWorker),
    takeEvery(checkAnswer.type, sagaCheckWorker),
  ]);
}
