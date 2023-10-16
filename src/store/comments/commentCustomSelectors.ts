import { createSelector } from '@reduxjs/toolkit'

import { Comment, commentSelectors } from './commentSlice'

//@ts-ignore
const getId = (_, id) => id
const getComments = commentSelectors.selectAll

export const selectComments = createSelector(
  [getComments, getId],
  (comments, id) => {
    if (comments) {
      const filteredComm = comments.filter(
        (item: Comment) => item.postId === id
      )
      console.log(filteredComm)
      return filteredComm
    }
    return []
  }
)
