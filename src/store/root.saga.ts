import { all } from 'redux-saga/effects'

import {
  watchGetPosts as watchGetPostsSaga
} from './posts/postSagas'

export function* rootSaga() {
  yield all([ watchGetPostsSaga()])
}
