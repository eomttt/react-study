import { all, put, call, takeEvery, delay } from 'redux-saga/effects'

// worker Saga: 비동기 증가 태스크를 수행할겁니다.
function* showPopup() {
  yield delay(2000);
  yield put({ type: 'SET_POPUP', payload: {text:'Test'}})
  // yield put({ type: 'HIDE_POPUP' })
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
function* watchIncrementAsync() {
  yield takeEvery('SHOW_POPUP', showPopup)
}

export default function* rootSaga() {
   yield all([
     watchIncrementAsync(),
   ]);
}
