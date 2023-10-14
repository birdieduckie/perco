import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { reducer as postsReducer } from './posts/postSlice'
import { reducer as commentsReducer } from './comments/commentSlice'
import { rootSaga } from './root.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: { posts: postsReducer, comments: commentsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
