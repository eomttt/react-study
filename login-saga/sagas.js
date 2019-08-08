import { all, put, select, delay, takeLatest, takeEvery, call } from 'redux-saga/effects';

import * as actions from './actions';

function _login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Login success');
      resolve();
    }, 1000)
  });
}

function* loginAction() {
  try {
    yield call(_login);
    yield put({
      type: actions.LOGIN_SUCCESS
    })
  } catch(error) {
    yield put({
      type: actions.LOGIN_FAILURE
    })
  }
}

function* actionWatcher() {
  yield takeEvery(actions.LOGIN_REQUEST, loginAction);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}