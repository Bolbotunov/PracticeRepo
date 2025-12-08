import { SagaIterator } from "redux-saga";
import { put, call, takeEvery } from "redux-saga/effects";
import {
  failedRequestUser,
  requestUser,
  succesRequestUser,
} from "../actions/actions";
import { FETCH_USERS_SAGA_ACTION, USER_URL } from "../constants/constants";

export function* usersWorker(): SagaIterator {
  try {
    yield put(requestUser());
    const response = yield call(fetch, USER_URL);
    const data = yield call([response, response.json]);
    yield put(succesRequestUser(data));
  } catch (error) {
    yield put(failedRequestUser(error));
  }
}

export function* usersWatcher() {
  yield takeEvery(FETCH_USERS_SAGA_ACTION, usersWorker);
}
