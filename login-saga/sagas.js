import { all, put, take, select, delay, takeLatest, takeEvery, call, fork } from 'redux-saga/effects';

import * as actions from './actions';

function _login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000)
  });
}

function* loginAction() {
  try {
    yield call(_login);
    yield put({
      type: actions.LOGIN_SUCCESS
    })
  } catch(error) {
    console.log("Login error", error);
    yield put({
      type: actions.LOGIN_FAILURE
    })
  }
}


// function* actionWatcher() {
//   while(true) {
//     yield take(actions.LOGIN_REQUEST);
//     yield call(loginAction);
//   }
// }

function* actionWatcher() {
  yield takeEvery(actions.LOGIN_REQUEST, loginAction);
  // yield takeLatest(actions.LOGIN_REQUEST, loginAction);
}

export default function* rootSaga() {
  yield all([
    fork(actionWatcher),
  ]);
}