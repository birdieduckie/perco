import { call, put, takeLatest } from 'redux-saga/effects'

import { POST_API } from 'shared/api'

import {
  postsReceived,
  postsRequested,
  postsRequestError,
  postRequested,
  postReceived,
  postRequestError,
} from './postSlice'

function* getPosts() {
  try {
    //@ts-ignore
    const response = yield call(POST_API.get, '/search?limit=50')
    console.log(response)
    //@ts-ignore
    yield put(postsReceived(response.data))

    console.log(response.data)
  } catch (error) {
    yield put(postsRequestError)

    console.log(error)
  }
}
//@ts-ignore

function* getPost({ payload: id }) {
  try {
    //@ts-ignore
    const response = yield call(POST_API.get, `/${id}`)
    //@ts-ignore
    yield put(postReceived(response.data))
  } catch (error) {
    yield put(postRequestError)
    console.error(error)
  }
}

export function* watchGetPosts() {
  yield takeLatest(postsRequested, getPosts)
}

export function* watchGetPost() {
  yield takeLatest(postRequested, getPost)
}
