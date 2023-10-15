import { call, put, takeLatest } from 'redux-saga/effects'

import { POST_API } from 'shared/api'

import {
  postsReceived,
  postsRequested,
  postsRequestError
} from './postSlice'

function* getPosts() {
  try {
    //@ts-ignore
    const response = yield call(POST_API.get, '/search?limit=10')
    console.log(response)
    yield put(postsReceived(response.data))

    console.log(response.data)
  } catch (error) {
    yield put(postsRequestError())

    console.log(error)
  }
}

export function* watchGetPosts() {
  yield takeLatest(postsRequested, getPosts)
}

