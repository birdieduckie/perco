import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Status } from '../types'

export interface Post {
  id: string
  url: string
  title: string
  text: string
}

const postsAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
  name: POSTS_SLICE,
  initialState: postsAdapter.getInitialState({
    status: Status.Initial,
  }),
  reducers: {
    postRequested(state, action) {
      console.log('request!')
      state.status = Status.Pending
    },
    postReceived(state, action) {
      postsAdapter.setOne(state, action.payload)
      state.status = Status.Success
    },
    postRequestError(state) {
      state.status = Status.Failure
    },
    postsRequested(state) {
      state.status = Status.Pending
    },
    postsReceived(state, action) {
      console.log(action.payload)
      postsAdapter.setAll(state, action.payload)
      state.status = Status.Success
    },
    postsRequestError(state) {
      state.status = Status.Failure
    },
  },
})

export const { actions, reducer } = postSlice

export const postsSelectors = postsAdapter.getSelectors()

export const {
  postsRequested,
  postsReceived,
  postsRequestError,
  postRequested,
  postReceived,
  postRequestError,
} = actions
