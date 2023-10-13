import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

export interface Comment {
    id: string
    taskId: string;
    text: string

}

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: comment => comment.id,
    sortComparer: (a, b) => a.taskId.localeCompare(b.taskId)
})

export const COMMENT_SLICE = 'comments'

export const commentSlice = createSlice({
    name: COMMENT_SLICE,
    initialState: commentsAdapter.getInitialState([] as Comment[]),
    reducers: {
        createComment(state, action) {
            commentsAdapter.addOne(state, action.payload)
        }
    }
})

export const { actions, reducer } = commentSlice

export const commentSelectors = commentsAdapter.getSelectors()

export const {
    createComment
} = actions