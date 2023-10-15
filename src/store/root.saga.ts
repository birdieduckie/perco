import { all } from 'redux-saga/effects'

import {
  watchGetPosts as watchGetPostsSaga,
  watchGetPost as watchGetPostSaga,
} from './posts/postSagas'

export function* rootSaga() {
  yield all([watchGetPostSaga(), watchGetPostsSaga()])
}
