import { put, call, takeEvery } from "redux-saga/effects";
import { countActionMinus, countActionPlus } from "../actions/actions";
import {
  COUNTER_ACTION_SAGA_DELAY_MINUS,
  COUNTER_ACTION_SAGA_DELAY_PLUS,
} from "../constants/constants";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* counterPlusWorker() {
  yield delay(3000);
  yield put(countActionPlus());
}

function* counterMinusWorker() {
  yield delay(3000);
  yield put(countActionMinus());
}

export function* counterWatcher() {
  yield takeEvery(COUNTER_ACTION_SAGA_DELAY_PLUS, counterPlusWorker);
  yield takeEvery(COUNTER_ACTION_SAGA_DELAY_MINUS, counterMinusWorker);
}
