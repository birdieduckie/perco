import { createEntityAdapter, createSlice, nanoid, createSelector, PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id: string
  postId: string
  text: string
}

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
  sortComparer: (a, b) => a.postId.localeCompare(b.postId),
})

export const COMMENT_SLICE = 'comments'

export const commentSlice = createSlice({
  name: COMMENT_SLICE,
  initialState: commentsAdapter.getInitialState([] as Comment[]),
  reducers: {
    createComment: {
      reducer: (state, action: PayloadAction<Comment>) => {
        commentsAdapter.setOne(state, action.payload)
        console.log(state)
      },
      prepare: (text: string, postId: string) => {
        const id = nanoid()
        console.log(text)
        return { payload: { id, text, postId } }
      },
    },
  },
})


export const { actions, reducer } = commentSlice

export const commentSelectors = commentsAdapter.getSelectors()

export const { createComment } = actions
